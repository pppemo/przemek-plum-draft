
# Running the app
1.  `yarn`
2.  `yarn start`
3. Go to [http://localhost:3000](http://localhost:3000)

# Please note, before reviewing
* This code is supposed to be as awesome as possible, but still - it's not a production code, and I'm very much aware of this. Below I've listed things I'd do more/differently.
* The design is not pixel perfect, I took a liberty and assumed some dimensions instead of measuring them perfectly. I understand this is ok, due to the nature of this exercise.
* I've used CSS modules and SASS for styling.
* For carousel I've decided to use an existing library `react-image-gallery`. It made very much sense to me to use an existing lib, even in this kind of exercise. As much as this doesn't show you, how I'd approach implementing this kind of carousel, I believe this showcases how I get and adapt an existing lib to my needs and requirements :-)
* The carousel uses lazy loading to improve performance and not download images that are only about to be shown.
* Try run the app with network throttling. I've added a spinner to be shown before images URLs get retrieved from API.
* Depending on the viewport, images are scaled accordingly using Imgix.
* I assumed it's ok to have only one viewport breakpoint. Obviously there'd be more.

# Wishlist
### Meaning, what I'd expect from this code, before this gets promoted to production
1. Tests - obviously
2. TypeScript: typing components
3. Pixel perfectness. Deeper insight into dimensions and measurements
4. Accessibility. Better than just providing `alt`s. I'd ideally allow navigating with keyboard, e.g. among top dropdowns. In this implementation they weren't really true dropdowns.
5. Better organisation of components in directories. It's just because now it's only one-pager app. Normally there would be more views.
6. Use memoisation for methods that deserve it, in order to improve performance.

Happy reviewing! :-)
