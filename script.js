//your JS code here. If required.
 document.getElementById('color-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const blockId = document.getElementById('block_id').value;
            const color = document.getElementById('colour_id').value;

            const gridItem = document.getElementById(blockId);
            if (gridItem) {
                document.querySelectorAll('.grid-item').forEach(item => {
                    item.style.backgroundColor = 'transparent';
                });
                gridItem.style.backgroundColor = color;
            } else {
                alert('Invalid block ID!');
            }
        });

        document.getElementById('reset_button').addEventListener('click', function() {
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
        });