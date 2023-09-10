const elements = document.querySelectorAll(".forScroll")

const intersectionOptions = {
	root: null,
	rootMargin: "0px",
	threshold: 0.4,
}

const scrollObserverCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active")
		} else {
			entry.target.classList.remove("active")
		}
	})
}

const observer = new IntersectionObserver(scrollObserverCallback, intersectionOptions)

elements.forEach((element) => {
	observer.observe(element)
})
