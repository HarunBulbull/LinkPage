# Harun Bülbül — Bağlantılar

Altı kişisel bağlantıyı bir araya getiren, mobil uyumlu statik site. HTML ve CSS kullanır; JavaScript, harici font, paket veya derleme zorunluluğu yoktur.

## Kullanım

`index.html` dosyasını tarayıcıda açın. Yerel HTTP sunucusu için:

```sh
python3 -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın.

## Düzenleme

- İsim, açıklamalar ve bağlantılar: `index.html`
- Renkler, boyutlar ve yerleşim: `style.css`
- Sekme simgesi: `favicon.svg`

## Statik barındırma

`index.html`, `style.css` ve `favicon.svg` dosyalarını aynı klasörde herhangi bir statik barındırma hizmetine yükleyebilirsiniz. GitHub Pages için depo kökünü yayın kaynağı olarak seçebilirsiniz.

Sites için yayın dosyalarını hazırlama:

```sh
node scripts/build.mjs
```

Bu komut üç dosyayı `dist/` klasörüne kopyalar. Yeni Sites önizlemesi varsayılan olarak yalnızca sahibine açıktır.
