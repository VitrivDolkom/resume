const elements = document.querySelectorAll(".myhidden")

const intersectionOptions = {
	root: null,
	rootMargin: "0px",
	threshold: 0.4,
}

const scrollObserverCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show")
			entry.target.classList.remove("myhidden")
		} else {
			entry.target.classList.add("myhidden")
			entry.target.classList.remove("show")
		}
	})
}

const observer = new IntersectionObserver(scrollObserverCallback, intersectionOptions)

elements.forEach((element) => {
	observer.observe(element)
})
