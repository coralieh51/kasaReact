handlePrevious(e) {
    if (!e.target.nextElementChild.getAttribute("key").slice(4,5) === "1") {
        e.target.nextElementChild.isActive === true;
        e.target.isActive === false;
    }
}