document.addEventListener("DOMContentLoaded", () => {

    fetch("drinks.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load");
            }
            return response.json();
        })
        .then(menu => {
            // create accordion buttons for each drink type
            const menuContainer = document.getElementById("menu");

            Object.values(menu).forEach(section => {
            // Create accordion button
            const button = document.createElement("button");
            button.className = "accordion";
            button.textContent = section.label;

            // Create panel
            const panel = document.createElement("div");
            panel.className = "panel";

            // Populate panel with items
            section.items.forEach(item => {
                const row = document.createElement("p");

                // Single price item
                if (item.price !== undefined) {
                row.textContent = `${item.name} — $${item.price}`;
                }

                // Multiple price item
                if (item.prices !== undefined) {
                const pricesText = item.prices
                    .map((p, i) => `${section.sizes[i]}: $${p}`)
                    .join(" | ");

                row.textContent = `${item.name} — ${pricesText}`;
                }

                panel.appendChild(row);
            });

            menuContainer.appendChild(button);
            menuContainer.appendChild(panel);
            });

            // accordion functionality modifications
            let acc1 = document.getElementsByClassName("accordion");
            var i;

            for(i = 0; i <acc1.length; i++) {
                acc1[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                });
            }
        })
        .catch(err => {
            console.error(err);
        });
});