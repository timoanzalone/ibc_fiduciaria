new WOW().init();
// const observer = lozad();
// observer.observe();
// var rellax = new Rellax('.rellax');
// window.addEventListener("load", function(){
//   window.cookieconsent.initialise({
//     "palette": {
//       "popup": {
//         "background": "#ffffff",
//         "text": "#000000",
//       },
//       "button": {
//         "background": "#ffffff",
//         "text": "#000000"
//       }
//     },
//     "content": {
//       "message": "Questo sito utilizza cookie tecnici per facilitare la navigazione, cookie di analytics per raccogliere dati in forma aggregata, e cookie di terze parti per poter offrire ulteriori servizi e funzionalità agli utenti. Cliccando sull’apposito pulsante, chiudendo questo banner, scorrendo questa pagina, cliccando su un link o proseguendo la navigazione in altra maniera, acconsenti all’uso dei cookie. Se vuoi saperne di più o negare il consenso a tutti o ad alcuni cookie,",
//       "dismiss": "<span style='text-decoration: underline;'>Acconsento</span>",
//       "link": "consulta la cookie policy",
//       "href": "/privacy.html"
//     }
//   });
// });

$(document).ready(function() {
  $(".overlay-nav-toggle").click(function() {
      $(".overlay-nav").css("top", "0");
      $(".overlay-nav").css("opacity", "1");
      $("main").css("transform", "translateY(20%)");
  });
  $(".overlay-nav-toggle-close").click(function() {
    $(".overlay-nav").css("top", "-100vh");
    $("main").css("transform", "translateY(0)");
  });
});
$(".overlay-nav-link").click(function(e) {
  e.preventDefault();
  $self = $(this);
  $(".overlay-nav").css("top", "-100vh"),
  $("main").css("transform", "translateY(0)"), $(function() {
    document.location.href = $self.attr('href');
  });
});

$(function () {
  var tabs = $("#tabs");

  // For each individual tab DIV, set class and aria-hidden attribute, and hide it
  $(tabs).find(".tabPanel").attr({
    "aria-hidden": "true"
  }).hide();

  // Get the list of tab links
  var tabsList = tabs.find("ul:first").attr({
    "class": "tabsList",
  });

  // For each item in the tabs list...
  $(tabsList).find("li > a").each(
    function (a) {
      var tab = $(this);

      // Create a unique id using the tab link's href
      var tabId = "tab-" + tab.attr("href").slice(1);

      // Assign tab id and aria-selected attribute to the tab control, but do not remove the href
      tab.attr({
        "id": tabId,
        "aria-selected": "false",
      }).parent().attr("role", "presentation");

      // Assign aria attribute to the relevant tab panel
      $(tabs).find(".tabPanel").eq(a).attr("aria-labelledby", tabId);

      // Set the click event for each tab link
      tab.click(
        function (e) {
          var tabPanel;

          // Prevent default click event
          e.preventDefault();

          // Change state of previously selected tabList item
          $(tabsList).find("> li.current").removeClass("current").find("> a").attr("aria-selected",
            "false");

          // Hide previously selected tabPanel
          $(tabs).find(".tabPanel:visible").attr("aria-hidden", "true").hide();

          // Show newly selected tabPanel
          tabPanel = $(tabs).find(".tabPanel").eq(tab.parent().index());
          tabPanel.attr("aria-hidden", "false").fadeIn(1000);

          // Set state of newly selected tab list item
          tab.attr("aria-selected", "true").parent().addClass("current");

          // Set focus to the first heading in the newly revealed tab content
          tabPanel.children("h2").attr("tabindex", -1).focus();
        }
      );
    }
  );

  // Set keydown events on tabList item for navigating tabs
  $(tabsList).delegate("a", "keydown",
    function (e) {
      var tab = $(this);
      switch (e.which) {
        case 37:
        case 38:
          if (tab.parent().prev().length != 0) {
            tab.parent().prev().find("> a").click();
          } else {
            $(tabsList).find("li:last > a").click();
          }
          break;
        case 39:
        case 40:
          if (tab.parent().next().length != 0) {
            tab.parent().next().find("> a").click();
          } else {
            $(tabsList).find("li:first > a").click();
          }
          break;
      }
    }
  );

  // Show the first tabPanel
  $(tabs).find(".tabPanel:first").attr("aria-hidden", "false").show();

  // Set state for the first tabsList li
  $(tabsList).find("li:first").addClass("current").find(" > a").attr({
    "aria-selected": "true"
  });
});

$('.accordion-drawer').click(function(){
  $('.accordion-drawer-content', this).toggleClass('is-open');
})








