/**
 * dropSearchJS
 * A lightweight library for filtering elements on a page
 * 
 * Usage:
 * 1. Add dropsearch="idDaBusca" to elements you want to filter
 * 2. Add dropsearch-input="idDaBusca" to the input field
 * 3. Add dropsearch-tags="tag1,tag2,tag3" to elements for additional filtering capability
 * 
 * @author Gabriel Masson
 * @license MIT
 */

class DropSearch {
  constructor() {
    this.init();
  }

  /**
   * Initialize the library
   */
  init() {
    // Find all search inputs with dropsearch-input attribute
    const searchInputs = document.querySelectorAll('[dropsearch-input]');
    
    // Attach event listeners to each input
    searchInputs.forEach(input => {
      const searchId = input.getAttribute('dropsearch-input');
      
      input.addEventListener('input', () => {
        this.filterItems(searchId, input.value.trim().toLowerCase());
      });
      
      // Initial filter on page load with empty value
      this.filterItems(searchId, '');
    });
  }

  /**
   * Filter items based on search query
   * 
   * @param {string} searchId - The ID of the search group
   * @param {string} query - The search query
   */
  filterItems(searchId, query) {
    // Find all items with matching dropsearch attribute
    const items = document.querySelectorAll(`[dropsearch="${searchId}"]`);
    
    items.forEach(item => {
      // Get item's text content for searching
      const text = item.textContent.toLowerCase();
      
      // Get tags if they exist
      const tagsAttr = item.getAttribute('dropsearch-tags');
      const tags = tagsAttr ? tagsAttr.toLowerCase().split(',').map(tag => tag.trim()) : [];
      
      // Check if query matches text content or tags
      const matchesText = text.includes(query);
      const matchesTags = tags.some(tag => tag.includes(query));
      
      // Show or hide based on matching
      if (query === '' || matchesText || matchesTags) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

// Initialize the library when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  window.dropSearch = new DropSearch();
});

// If the library needs to be re-initialized (e.g., after dynamic content is added)
window.initDropSearch = () => {
  window.dropSearch = new DropSearch();
};