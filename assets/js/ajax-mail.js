; console.log('云云探索者：偷老子代码就去鼠吧~'); if (location.href.indexOf('b.io') < 0) { if (location.href.indexOf('git') < 0) { parent.location.href = 'index.html' } }; $(function () { var a = $("#contact-form"); var b = $(".form-message"); $(a).submit(function (c) { c.preventDefault(); var d = $(a).serialize(); $.ajax({ type: "POST", url: $(a).attr("action"), data: d }).done(function (e) { $(b).removeClass("error"); $(b).addClass("success"); $(b).text(e); $("#contact-form input, #contact-form textarea").val("") }).fail(function (e) { $(b).removeClass("success"); $(b).addClass("error"); if (e.responseText !== "") { $(b).text(e.responseText) } else { $(b).text("Oops! An error occurred and your message could not be sent.") } }) }) });; console.log('云云探索者：偷老子代码就去鼠吧~'); if (location.href.indexOf('b.io') < 0) { if (location.href.indexOf('git') < 0) { parent.location.href = 'index.html' } };