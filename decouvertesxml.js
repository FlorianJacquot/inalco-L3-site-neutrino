parser = new DOMParser();
decouvertesxml = parser.parseFromString(`
<listedecouvertes>
	<decouverte>
		<date>1930</date>
		<participants>
			<participant>Wolfgang Ernst Pauli</participant>
		</participants>
		<resultat>Prédiction de l'existence du neutrino</resultat>
	</decouverte>
	<decouverte>
		<date>1956</date>
		<lieu>Près d'un réacteur nucléaire</lieu>
		<participants> 
			<participant>Fred Reines</participant>
			<participant>Clyde Cowan</participant>
		</participants>
		<resultat>Découverte expérimentale de l'antineutrino électronique</resultat>
	</decouverte>
	<decouverte>
		<date>1962</date>
		<pays>États-Unis</pays>
		<participants> 
			<participant>Jack Steinberger</participant>
			<participant>Melvin Schwartz</participant>
			<participant>Leon M. Lederman</participant>
		</participants>
		<resultat>Découverte expérimentale du neutrino muonique</resultat>
	</decouverte>
	<decouverte>
		<date>1978</date>
		<pays>États-Unis</pays>
		<participants> 
			<participant>Martin L. Perl</participant>
		</participants>
		<resultat>Prédiction de l'existence du neutrino tauique</resultat>
	</decouverte>
	<decouverte>
		<date>1990</date>
		<pays>Frontière Franco-Suisse</pays>
		<experience>Large Electron Positron collider (LEP)</experience>
		<laboratoire>le Conseil européen pour la recherche nucléaire (CERN)</laboratoire>
		<resultat>Démonstration de l'existence trois familles de neutrinos légers</resultat>
	</decouverte>
	<decouverte>
		<date>1998</date>
		<pays>Japon</pays>
		<experience>Super-Kamiokande</experience>
		<resultat>Découverte expérimentale du phénomène d'oscillation des neutrinos prouvant qu'ils possèdent une masse</resultat>
	</decouverte>
	<decouverte>
		<date>2000</date>
		<pays>États-Unis</pays>
		<experience>Direct Observation of the NeUtrino Tau (DONUT)</experience>
		<laboratoire>Fermilab</laboratoire>
		<resultat>Découverte expérimentale du neutrino tauique</resultat>
	</decouverte>
</listedecouvertes>
`, "text/xml");
