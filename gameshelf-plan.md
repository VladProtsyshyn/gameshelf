# GameShelf Architecture Plan

## Project Positioning

`GameShelf` is a multi-page React + Vite application for game discovery, saving favorites and wishlists, exploring studios, and later checking where games can be bought.

Core stack:

- React
- Vite
- React Router
- Redux Toolkit
- React Redux
- Framer Motion

Primary API:

- RAWG API for games, genres, platforms, developers, publishers, screenshots, and store metadata

Future integrations:

- store search / storefront links
- studio news / article API

## Final Pages

### 1. Home

Purpose:

- introduce the product
- create a strong first impression
- guide users into the main discovery flow

Sections:

- Hero
- Trending Now
- Browse by Genre
- Platform Strip
- Studios Spotlight
- Build Your Library
- Final CTA

### 2. Games

Purpose:

- main searchable and filterable games catalog

Key features:

- search by title
- filters by genre and platform
- sorting
- load more / pagination
- loading, error, and empty states

### 3. Game Details

Purpose:

- full game information page

Key features:

- banner / cover
- game metadata
- genres and platforms
- developers / publishers
- screenshots
- add to favorites
- add to wishlist
- later: stores block

### 4. Library

Purpose:

- user-saved games area

Key features:

- Favorites tab
- Wishlist tab
- localStorage persistence
- remove from saved lists
- open game details
- later: where to buy block

### 5. Studios

Purpose:

- explore game studios, developers, and publishers

Key features:

- searchable studios list
- studio cards
- studio-linked games
- studio metadata from RAWG
- later: news / articles block

### 6. Not Found

Purpose:

- graceful fallback for invalid routes

## Recommended Folder Structure

```text
gameshelf/
  public/
  src/
    app/
      router/
      providers/
    assets/
      images/
      icons/
    components/
      common/
      layout/
      feedback/
      sections/
    features/
      games/
        api/
        components/
        hooks/
        pages/
        slice/
        utils/
      library/
        components/
        pages/
        slice/
        utils/
      studios/
        api/
        components/
        pages/
        slice/
        utils/
      home/
        components/
        pages/
      stores/
        components/
        utils/
    services/
      api/
    store/
    styles/
    utils/
    App.jsx
    main.jsx
```

## Recommended `src` Breakdown

### `src/app`

Contains application-level setup.

Suggested files:

- `AppRouter.jsx`
- `providers/StoreProvider.jsx` if needed
- `router/routes.jsx`

### `src/assets`

Static assets.

Suggested folders:

- `images`
- `icons`
- later: `illustrations`

### `src/components/common`

Reusable UI parts shared across features.

Suggested components:

- `Button`
- `Input`
- `SearchBar`
- `SelectField`
- `SectionHeading`
- `Tag`
- `IconButton`
- `GameCard`
- `StudioCard`

### `src/components/layout`

Layout shell.

Suggested components:

- `AppLayout`
- `Header`
- `Navbar`
- `Footer`
- `PageIntro`
- `Container`

### `src/components/feedback`

UI states and helper blocks.

Suggested components:

- `Loader`
- `SkeletonCard`
- `EmptyState`
- `ErrorState`
- `ResultsCount`

### `src/components/sections`

Home-specific and marketing-style display sections that may be reused.

Suggested components:

- `HeroSection`
- `TrendingSection`
- `GenreSection`
- `PlatformSection`
- `StudiosSpotlightSection`
- `LibraryPreviewSection`
- `CtaSection`

## Feature Structure

### `src/features/games`

Main discovery feature.

Suggested files and folders:

- `api/gamesApi.js`
- `components/GameGrid.jsx`
- `components/GamesToolbar.jsx`
- `components/GamesFilters.jsx`
- `components/GameMetaList.jsx`
- `components/ScreenshotGallery.jsx`
- `pages/GamesPage.jsx`
- `pages/GameDetailsPage.jsx`
- `slice/gamesSlice.js`
- `slice/gameDetailsSlice.js`
- `utils/mapGameCardData.js`

### `src/features/library`

Saved lists logic.

Suggested files and folders:

- `components/LibraryTabs.jsx`
- `components/SavedGamesGrid.jsx`
- `components/LibraryEmptyState.jsx`
- `pages/LibraryPage.jsx`
- `slice/librarySlice.js`
- `utils/storage.js`

### `src/features/studios`

Studios and publishers feature.

Suggested files and folders:

- `api/studiosApi.js`
- `components/StudiosGrid.jsx`
- `components/StudiosSearch.jsx`
- `components/StudioHighlights.jsx`
- `components/StudioGamesList.jsx`
- `pages/StudiosPage.jsx`
- `slice/studiosSlice.js`
- `utils/mapStudioCardData.js`

### `src/features/home`

Home page composition.

Suggested files and folders:

- `components/HomeHero.jsx`
- `components/HomeTrending.jsx`
- `components/HomeGenres.jsx`
- `components/HomePlatforms.jsx`
- `components/HomeStudios.jsx`
- `components/HomeLibraryPreview.jsx`
- `components/HomeCta.jsx`
- `pages/HomePage.jsx`

### `src/features/stores`

Planned later but worth preparing for.

Suggested files and folders:

- `components/StoreList.jsx`
- `components/StoreBadge.jsx`
- `utils/mapStoreLinks.js`

## Services Layer

### `src/services/api`

Shared API configuration.

Suggested files:

- `rawgClient.js`
- `endpoints.js`
- `request.js`

Responsibilities:

- base URL
- API key handling
- query param helpers
- request formatting
- shared error handling

## Store Structure

### `src/store`

Suggested files:

- `index.js`
- `rootReducer.js`

Suggested slices:

- `gamesSlice`
- `gameDetailsSlice`
- `librarySlice`
- `studiosSlice`

Optional later:

- `uiSlice`
- `storesSlice`
- `newsSlice`

## Routing Proposal

```text
/                 -> HomePage
/games            -> GamesPage
/games/:slug      -> GameDetailsPage
/library          -> LibraryPage
/studios          -> StudiosPage
*                 -> NotFoundPage
```

## Data Responsibilities

### Games feature

Handles:

- search query
- selected genre
- selected platform
- sort option
- fetched games list
- pagination / load more state

### Library feature

Handles:

- favorites
- wishlist
- persistence in localStorage

### Studios feature

Handles:

- studios list
- studio search query
- linked games and studio previews

## Recommended Build Order

1. project scaffold
2. routing and layout shell
3. design tokens and global styling
4. Home page
5. Games page
6. Game Details page
7. Library page
8. Studios page
9. polish and responsive refinement
10. stores and news enhancements

## Notes

- `Home` should be the most visually ambitious page from the start.
- `Games` should absorb advanced search and filtering instead of splitting that logic into extra pages.
- `Library` should keep both Favorites and Wishlist inside one route.
- `Studios` should use RAWG for the first version and treat news/articles as an enhancement.
