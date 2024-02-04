function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.content');
  sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
  content.style.marginLeft = content.style.marginLeft === '250px' ? '0' : '250px';
}