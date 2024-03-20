document.addEventListener("DOMContentLoaded", function() {
    const courseTrigger = document.querySelector(".course_trigger");
    const allCoursesContainer = document.querySelector(".all_courses");

    if (window.innerWidth > 1024) {
    
        courseTrigger.addEventListener("mouseenter", function() {
            allCoursesContainer.style.display = "block";
        });
    
        allCoursesContainer.addEventListener("mouseenter", function() {
            allCoursesContainer.style.display = "block";
        });
    
        allCoursesContainer.addEventListener("mouseleave", function(e) {
            if (!e.relatedTarget || !e.relatedTarget.closest(".course_trigger")) {
                allCoursesContainer.style.display = "none";
            }
        });
    
        document.addEventListener("click", function(e) {
            if (!allCoursesContainer.contains(e.target) && !courseTrigger.contains(e.target)) {
                allCoursesContainer.style.display = "none";
            }
        });
    }
    
});