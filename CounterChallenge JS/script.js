let count = 0;

        function updateCounter() {
            document.getElementById('counter').innerText = count;
        }

        function increment() {
            count++;
            updateCounter();
        }

        function decrement() {
            count--;
            updateCounter();
        }

        function reset() {
            count = 0;
            updateCounter();
        }