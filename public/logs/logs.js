getData();

    async function getData() {
      const response = await fetch('/api');
      const data = await response.json();

      for (item of data) {
        const root = document.createElement('div');
        const name = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const image = document.createElement('img');

        name.textContent = `Name: ${item.userName}`;
        geo.textContent = `${item.lat}, ${item.long}`;
        date.textContent = `${item.timestamp.toString()}`;
        image.src = item.image64;

        root.append(name, geo, date, image);
        document.body.append(root);
      }
      console.log(data);
    }