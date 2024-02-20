/*
    Author:     B.D.C. JAYASANKA
    Date:       March 17th, 2023
    Purpose:    Functions to set header and footer of all pages
    Copyright:  © 2023, All rights reserved
*/

export function setFooter() {
    let footerData = `
    <div id="inner-container" class="container-default">
    <div class="row">
        <div class="footer-col">
            <h4 id="pages">Pages</h4>
            <ul>
                <li ><a id="home" href="/student-2/main-page/main-page.html">Home</a></li>
                <li ><a id="products" href="/student-1/products/products.html">Products</a></li>
                <li ><a  id="gallery"href="/student-4/gallery/gallery.html">Gallery</a></li>
                <li ><a id="quiz" href="/student-3/quiz/quiz.html">Quiz</a></li>
                <li><a id="feedback" href="/student-2/feedback/feedback.html">Feedback</a></li>
                <li><a id="sitemap" href="/student-4/site-map/site-map.html">Sitemap</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4 id="content-pages">Content pages</h4>
            <ul>
                <li><a id="order-confirmation" href="#">order-confirmation</a></li>
                <li><a id="sigirock" href="/student-2/dest-of-month/dest-of-month.html">Sigiriya-rock</a></li>
                <li><a id="contactus" href="/student-3/contact-us/contact-us.html">Contact us</a></li>
                <li><a id="dest-more-info" href="/student-4/info-page/info-page.html">destination more information</a></li>
                
            </ul>
        </div>
        <div class="footer-col">
            <h4>Page Editors</h4>
            <ul>
                <li><a id="student1" href="#">Student-1</a></li>
                <li><a  id="student2" href="/student-2/page-editor/page-editor.html">Student-2</a></li>
                <li><a  id="student3" href="/student-3/page-editor/page-editor.html">Student-3</a></li>
                <li><a id="student4" href="/student-4/page-editor/page-editor.html">Student-4</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4 id="followus">follow us</h4>
            <div id="sociallinks" class="social-links">
                <a href="https://www.facebook.com/wonderscapetravel/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/@wonderscape"><i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/w0nder.scape/"><i class="fab fa-instagram"></i></a>
                <a href="https://www.twitter.com/wonderscape1"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
    `;
    document.querySelector("footer").innerHTML = footerData;
}


