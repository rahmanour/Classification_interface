import React, { useState,useEffect } from 'react'
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './drawer';
import Grid from '@material-ui/core/Grid'
import TextCard from './textcard'
import {Typography} from '@material-ui/core'
import axios from 'axios'
export default function Thematic() {
    const [thematics,setThematics] = useState([]);
    const list=['Accidents du travail', 'Acte de l’autorité publique',
    'Activités artistiques', 'Activités commerciales',
    'Activités spatiales', 'Administration',
    'Agence Spatiale Algérienne', 'Agriculture', 'Agroalimentaire',
    'Agréments', 'Aménagement du territoire', 'Antidumping', 'Appel',
    "Appel d'offres", 'Armes chimiques', 'Artisanat',
    'Assistance judiciaire', 'Associations', 'Assurances',
    'Assurances sociales', 'Audiovisuel', 'Automobile', 'Avocats',
    'Aéronef', 'Aïd El-Adha ', 'BTPH', 'Bail', 'Banque & Monnaie',
    "Bien de l'État", 'Biens culturels', 'Biens immobiliers',
    'Botswana', 'Brevet d’invention', 'Bureaux de liaison',
    'Cahier des charges', 'Capital social ', 'Cartes professionnelles',
    'Catastrophes naturelles', 'Caution de bonne exécution',
    "Centres d'accueil de la petite enfance",
    'Certification électronique', 'Chèque', 'Chèque postal',
    'Chèques sans provision', 'Chômage',
    'Circonscription administrative',
    'Circulation des étrangers en Algérie',
    'Classification professionnelles', 'Clubs sportifs',
    "Code de l'enregistrement",
    'Code de procédure civile et administrative',
    'Code de procédure pénale',
    'Code des Marchés Publics et des délégations de service public',
    'Code des douanes', 'Code des impôts directs et taxes assimilées',
    'Code des impôts indirects',
    'Code des postes et télécommunications',
    'Code des procédures fiscales', 'Code pénal', "Comité d'arbitrage",
    'Commerce', 'Commerce extérieur', 'Commissaire aux comptes',
    'Commissions paritaires', 'Communication', 'Compensation fiscale',
    'Comptabilité', 'Comptabilité ', 'Comptables publics',
    'Comptes bancaires ', 'Comptes devises',
    "Compétence d'attribution ", 'Concours', 'Concurrence',
    'Conformité', "Conseil d'Etat", 'Conseil des Ministres',
    'Constitutionnel', 'Construction', 'Contrats', 'Contrebande',
    'Contribuable', 'Contrôle de la qualité', 'Contrôle des changes',
    'Contrôle des comptes publics', 'Convention Internationale',
    'Corruption', 'Cotisations sociales', 'Crédit-bail',
    'Crédits bancaires', 'Culture', 'Denrée alimentaire',
    'Domaine minier', 'Domaine national', 'Domiciliation bancaire',
    'Dons', 'Douanes', 'Droit civil', 'Droit commercial',
    'Droit compensateur', "Droit d'enregistrement", 'Droit de change',
    'Durée des contrats', 'Découpage judiciaire', 'Défense nationale',
    'Développement durable', 'Développement technologique',
    'Education nationale', 'Emballage', 'Energie',
    'Energies Renouvelables', 'Enseignement supérieur',
    'Entreprises publiques', 'Environnement', 'Equipements sensibles',
    'Expert-comptable ', 'Exportation de devises', 'Exportations',
    'Facilité de dépôt rémunéré', 'Famille', 'Finances',
    'Finances publiques', 'Fiscalité', 'Foires et expositions',
    'Fonction publique', 'Fonds de garantie des dépôts bancaires ',
    'Formation professionnelle', 'Fraude', 'Fêtes légales',
    'Garantie ', 'Gaz', 'Hydraulique', 'Hydrocarbures', 'Hygiène',
    'Hypothèque maritime', 'Hôtellerie', 'Identification bancaire',
    'Immobilier', 'Importations',
    'Impôt complémentaire sur le résultat', 'Impôt forfaitaire unique',
    'Impôt sur le revenu global',
    'Impôt sur les bénéfices des sociétés', 'Indemnisation',
    'Industrie', 'Industries agroalimentaires', 'Indépendance',
    'Information', 'Infracation', 'Inspection',
    'Instruments de paiement', 'International', 'Internet',
    'Investissement', 'Investissements étrangers',
    'Jeunesse et sports ', 'Jeux de hasard',
    'Juridiction administrative', "Laboratoires d'analyses",
    "Licence d'exploitation et d'établissement", 'Liquidation',
    'Logement ', 'Logiciels informatiques', 'Loi de Finances',
    'Magistrature', 'Maladies professionnelles', 'Marché des changes',
    'Marché interbancaire', 'Marché monétaire', "Marchés d'études",
    'Marchés publics', 'Marine marchande', 'Marque',
    'Mesures de sauvegarde', 'Mouvement des capitaux',
    'Médecine du travail', 'Métaux précieux', 'Normalisation',
    'Normes', 'Notaire', 'Notification', 'Nucléaire', 'Numérique',
    "Opérations d'escompte", 'Opérations de banque',
    'Opérations de change', 'Opérations de réescompte',
    'Opérations en devises', 'Organisation judiciaire',
    'Paiement électronique', 'Patrimoine', 'Personnels militaires',
    'Petite et moyenne entreprise (PME)', 'Pharmaceutique',
    'Placement des travailleurs', 'Plastique', 'Politique monétaire',
    'Poste', 'Pourvoi en cassation', 'Pratiques commerciales',
    'Prescription ', 'Presse', 'Prestations de services', 'Preuve',
    'Prime de scolarité', 'Procédure', 'Production',
    'Produits textiles', 'Produits toxiques',
    'Produits à la consommation', "Promotion de l'investissement",
    'Promotion de la santé', 'Promotion immobilière',
    'Propriété intellectuelle', 'Protection civile',
    "Protection de l'enfance", 'Protection des consommateurs',
    'Prévention des risques professionnels', 'Prêt', 'Psychotropes',
    'Pèlerinage', 'Pénal', 'Pêche', 'Pêche et aquaculture',
    'Radiocommunications', 'Recherche scientifique', 'Recyclage',
    'Registre de commerce électronique ', 'Registre du commerce',
    'Relations de travail', 'Ressources en eau', 'Retraite',
    'Risque de liquidité', 'Risques bancaires', 'Risques majeurs',
    'Règlement intérieur ', 'Régime fiscal des redevances',
    'Régime électoral ', 'Réparation', 'Répression des fraudes',
    'Réserves obligatoires', 'Rétractation', 'Réunion du gouvernement',
    'Salaire national minimum garanti', 'Santé', 'Santé mentale',
    'Service national', 'Services publics', 'Social',
    'Société de garantie des dépôts bancaires', 'Sociétés', 'Stage',
    'Surveillance des risques interbancaires', 'Systèmes de paiement ',
    'Sécurité', 'Sécurité sociale', 'Sûreté nationale',
    'Tarif douanier', 'Taxe annuelle d’habitation',
    'Taxe sur la valeur ajoutée', 'Technologies de l’information',
    'Terrorisme', 'Tourisme', 'Transaction', 'Transfert de fonds',
    'Transport', 'Transport aérien', 'Transport ferroviaire',
    'Transport maritime', 'Transport routier', 'Travail',
    'Travail à domicile ', 'Travaux publics', 'Télécommunications',
    'Vignette automobile ', 'Voies de recours', 'Vétérinaire',
    'Zones sinistrées', 'Élections ', 'Établissements hospitaliers',
    'Établissements pénitentiaires ', 'Étiquetage']
    useEffect(() => {
    axios
      .get("http://db3d-35-245-78-114.ngrok.io/get_thematics")
      .then(response => {
        console.log(response.data)
        setThematics(response.data['thematics'])});
  }, []);
    return (
        <Container>
          <PersistentDrawerRight/>
          <Typography variant="h2" color="primary" align="center">
             La Liste des Thématiques
            </Typography>
          <Grid container align="center">
          {thematics.map(thematic =>(
              <Grid item xs={12} sm={6} md={4} >
              <TextCard text={thematic} />
              </Grid>
          ))}
          </Grid>
          </Container>
    )
}