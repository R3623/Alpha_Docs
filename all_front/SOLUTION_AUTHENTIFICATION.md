# Solution au problème d'authentification localStorage

## Problème identifié

Le problème était que le `localStorage` est spécifique à chaque port. Quand l'utilisateur se connecte sur le port 8080 (login.html), les données d'authentification sont stockées dans le localStorage de ce port, mais l'application React tourne sur le port 5173 et ne peut pas accéder à ces données.

## Solution implémentée

### 1. Utilisation des cookies au lieu du localStorage

Les cookies sont partagés entre tous les ports du même domaine, contrairement au localStorage qui est isolé par port.

#### Modifications dans `TestForm/login.html` :
- Ajout d'une fonction `setCookie()` pour définir les cookies
- Remplacement de `localStorage.setItem()` par `setCookie()`
- Les cookies expirent après 7 jours

#### Modifications dans `AuthContext.tsx` :
- Ajout de fonctions utilitaires `getCookie()` et `deleteCookie()`
- Modification de `checkAuth()` pour vérifier les cookies d'abord
- Ajout de `clearAuthData()` pour nettoyer tous les cookies
- Mise à jour de `logout()` pour utiliser `clearAuthData()`

### 2. Amélioration de la gestion des erreurs

- Meilleure gestion des erreurs réseau
- Nettoyage automatique des cookies en cas de session invalide
- Logs d'erreur pour le débogage

### 3. Configuration centralisée

Création de `config/constants.ts` pour centraliser :
- URLs de l'API
- URLs de redirection
- Configuration des rôles
- Configuration des ports

## Avantages de cette solution

1. **Partage des données** : Les cookies sont accessibles depuis tous les ports du même domaine
2. **Sécurité** : Les cookies peuvent être configurés avec des attributs de sécurité (HttpOnly, Secure, SameSite)
3. **Expiration automatique** : Les cookies peuvent avoir une date d'expiration
4. **Compatibilité** : Fonctionne avec les sessions Django côté backend

## Utilisation

1. L'utilisateur se connecte sur `http://localhost:8080/TestForm/login.html`
2. Les données d'authentification sont stockées dans les cookies
3. L'utilisateur est redirigé vers `http://localhost:5173`
4. L'application React lit les cookies pour vérifier l'authentification
5. Si les cookies sont valides, l'utilisateur reste connecté

## Configuration des cookies

Les cookies sont configurés avec :
- `path=/` : Accessible sur tout le domaine
- `SameSite=Lax` : Sécurité contre les attaques CSRF
- Expiration : 7 jours

## Nettoyage

En cas de déconnexion ou d'erreur :
- Tous les cookies d'authentification sont supprimés
- L'utilisateur est redirigé vers la page de connexion
- L'état React est réinitialisé 