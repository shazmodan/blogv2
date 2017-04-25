<blog-article>
    <article if={ article } class="full-article col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" itemscope="" itemtype="http://schema.org/BlogPosting">
        <div class="row">
            <a class="link" href="{ article.name }" itemprop="url">
                <h1 itemprop="name headline">{ article.heading }</h1>
            </a>
            <p class="lead">{ article.teaser }</p>
            <p class="small" itemprop="datePublished">Published { article.publishDate ? article.publishDate.substring(0, 10) : '' }</p>
        </div>
        <div class="row">
            <div itemprop="articleBody"><raw content="{ article.bodyHtml }" /></div>
        </div>
    </article>
    
    <script>
        opts.loadArticle(opts.articleName)
			.then((article) => {
                console.log("article", article);
				this.article = article;
				this.update();
		});

        this.on('updated', () => {
            if(this.mixin('highlight')){
                this.mixin('highlight').initHighlighting();
            }
        });
        

    </script>

</blog-article>