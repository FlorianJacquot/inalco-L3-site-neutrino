parser = new DOMParser();

// decouvertesxslliste = parser.parseFromString(`
// <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	// <xsl:template match="/"> 
		// <ul>
		// <xsl:for-each select="listedecouvertes/decouverte"> 
			// <li>
			// <xsl:for-each select="resultat">
				// <xsl:value-of select="." />
			// </xsl:for-each>
			// </li>
		// </xsl:for-each>
		// </ul>
	// </xsl:template>
// </xsl:stylesheet>
// `, "text/xml");

// decouvertesxslillustrations = parser.parseFromString(`
// <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	// <xsl:template match="/"> 
		// <table>
		// <xsl:for-each select="listedecouvertes/decouverte">
			// <tr>
			// <td><strong><xsl:value-of select="date" /></strong></td>
			// <td>
			// <xsl:value-of select="resultat"/>
			// </td>
			// </tr>
		// </xsl:for-each>
		// </table>
	// </xsl:template>
// </xsl:stylesheet>
// `, "text/xml");

decouvertesxsltimeline = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/"> 
		<div class="timeline">
			<xsl:for-each select="listedecouvertes/decouverte">
			  <div class="container left">
				<div class="content">
				  <h2><xsl:value-of select="date"/></h2>
				  <p></p>
				  <p><xsl:value-of select="resultat"/> par : <a href="{url}"><xsl:value-of select="url"/></a><strong><xsl:value-of select="participants/participant"/></strong> <strong><xsl:value-of select="experience"/></strong></p>
				</div>
			  </div>
			</xsl:for-each>
		</div>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");