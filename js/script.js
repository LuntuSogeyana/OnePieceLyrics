document.addEventListener('DOMContentLoaded', function () {
    const lyricsList = document.querySelector('.lyrics-list');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageNumberDisplay = document.getElementById('page-number');
    let currentPage = 1;
    const lyricsPerPage = 4;
  
    const lyricsData = [
      { title: "We Are!", artist: "Hiroshi Kitadani", link: "../Pages/lyrics/OnePieceOpening1-WeAre.html" },
      { title: "Believe", artist: "Folder5", link: "../Pages/lyrics/OnePieceOpening2-Believe.html" },
      { title: "Hikari e", artist: "The Babystars" },
      { title: "BON VOYAGE!", artist: "Bon-Bon Blanco" },
      { title: "Kokoro no Chizu", artist: "BOYSTYLE" },
      { title: "Brand New World", artist: "D-51" },
      { title: "We Go!", artist: "Hiroshi Kitadani" },
      { title: "Hands Up!", artist: "Kota Shinzato" },
      { title: "Hope", artist: "Namie Amuro" },
      { title: "Dreamin' On", artist: "Da-iCE" },
      { title: "PAINT", artist:"Sekai no Owari" },
      { title: "Saiko Totatsuten", artist:"I Don't Like Mondays" },
      { title: "UUUUUS!", artist: "Hiroshi Kitadani" },
    ];
  
    function displayLyrics(page) {
      lyricsList.innerHTML = '';
      const start = (page - 1) * lyricsPerPage;
      const end = start + lyricsPerPage;
      const currentLyrics = lyricsData.slice(start, end);
  
      currentLyrics.forEach(lyric => {
        const lyricItem = document.createElement('div');
        lyricItem.className = 'lyric-item';
        lyricItem.innerHTML = `
          <h3>${lyric.title}</h3>
          <p>Artist: ${lyric.artist}</p>
          <a href="${lyric.link}">View Lyrics</a>
        `;
        lyricsList.appendChild(lyricItem);
      });
  
      pageNumberDisplay.textContent = page;
    }
  
    prevButton.addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        displayLyrics(currentPage);
      }
    });
  
    nextButton.addEventListener('click', function () {
      if (currentPage < Math.ceil(lyricsData.length / lyricsPerPage)) {
        currentPage++;
        displayLyrics(currentPage);
      }
    });
  
    document.getElementById('explore').addEventListener('click', function() {
      document.getElementById('lyrics').scrollIntoView({ behavior: 'smooth' });
    });
  
    displayLyrics(currentPage);
  });
  