# DropSearchJS

A lightweight JavaScript library that adds dynamic search functionality to any web page with minimal setup.

## Features

- **Simple Setup**: Just add HTML attributes to your elements
- **Zero Dependencies**: Pure vanilla JavaScript, no jQuery or other libraries needed
- **Real-time Filtering**: Updates as the user types
- **Tag Support**: Filter by custom tags
- **Responsive**: Works on all devices and screen sizes
- **No Configuration**: Works out of the box

## Installation

### Direct Download

Download the [latest release](https://github.com/gmasson/dropsearchjs/releases) and include it in your project:

```html
<script src="path/to/dropsearch.min.js"></script>
```

## Quick Start

1. Add the script to your HTML:
```html
<script src="path/to/dropsearch.min.js"></script>
```

2. Add the `dropsearch-input` attribute to your search input:
```html
<input type="text" dropsearch-input="products" placeholder="Search...">
```

3. Add the `dropsearch` attribute to elements you want to filter:
```html
<div dropsearch="products">Product One</div>
<div dropsearch="products">Product Two</div>
<div dropsearch="products">Product Three</div>
```

4. That's it! The library initializes automatically.

## Example

An example implementation is included in the `example/index.html` file. This example demonstrates:

- Basic implementation with Bootstrap styling
- Product catalog with multiple filterable items
- Tag-based filtering for more precise searches
- Responsive layout for all device sizes
- "No results found" message that appears when no matches are found

To run the example:
1. Open the `example/index.html` file in your browser
2. Try typing in the search box to see real-time filtering
3. Search for product names or tag keywords (e.g. "headphones", "electronics", "books")

## Advanced Usage

### Tag-Based Filtering

Add tags to your items for more precise filtering:

```html
<div dropsearch="products" dropsearch-tags="electronics,gadgets">Smartphone</div>
<div dropsearch="products" dropsearch-tags="clothing,fashion">T-Shirt</div>
```

### Multiple Search Groups

You can have multiple independent search groups on the same page:

```html
<!-- Products Search -->
<input type="text" dropsearch-input="products" placeholder="Search products...">
<div dropsearch="products">Product One</div>
<div dropsearch="products">Product Two</div>

<!-- Users Search -->
<input type="text" dropsearch-input="users" placeholder="Search users...">
<div dropsearch="users">User One</div>
<div dropsearch="users">User Two</div>
```

### Manually Re-initialize

If you dynamically add elements to your page, you can re-initialize the library:

```javascript
window.initDropSearch();
```

### Custom Styling for No Results

```html
<div id="no-results" style="display: none;">
  No results found
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('[dropsearch-input="products"]');
    const items = document.querySelectorAll('[dropsearch="products"]');
    const noResults = document.getElementById('no-results');
    
    searchInput.addEventListener('input', () => {
      setTimeout(() => {
        const visibleItems = Array.from(items).filter(item => 
          item.style.display !== 'none'
        );
        
        noResults.style.display = visibleItems.length === 0 ? 'block' : 'none';
      }, 100);
    });
  });
</script>
```

## API Reference

### HTML Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `dropsearch-input="id"` | Add to input elements to create a search field | `<input dropsearch-input="products">` |
| `dropsearch="id"` | Add to elements that should be filtered | `<div dropsearch="products">Item</div>` |
| `dropsearch-tags="tag1,tag2"` | Add comma-separated tags for additional filtering | `<div dropsearch="products" dropsearch-tags="clothing,red">Red Shirt</div>` |

### JavaScript Methods

| Method | Description |
|--------|-------------|
| `window.initDropSearch()` | Re-initializes the library (use after dynamically adding elements) |

## Browser Support

DropSearchJS works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Chrome for Android (latest)
- Safari iOS (latest)

## Performance

DropSearchJS is designed to be extremely lightweight and performant:

- No external dependencies
- Uses efficient DOM selectors
- Minimal reflows and repaints

## Customization

### Custom Matching Algorithm

If you need to customize how matches are determined, you can extend the library:

```javascript
// Save the original prototype method
const originalFilterItems = DropSearch.prototype.filterItems;

// Override with custom logic
DropSearch.prototype.filterItems = function(searchId, query) {
  // Your custom implementation here
  // or call the original with custom behavior
  originalFilterItems.call(this, searchId, query);
}
```

## Building From Source

Download the source code and use your preferred method to minify the JavaScript file for production use.

## Contributing

Contributions are welcome. Please submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
