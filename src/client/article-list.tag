<article-list>
	<loading if={ !articles }></loading>
	<div each={ articles } class="row article-list">
		<article class="article-post col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2" itemscope="" itemtype="http://schema.org/BlogPosting">
			<div class="row">
				<a class="link" href="{ slug }" itemprop="url">
					<img itemprop="image" ng-if="article.iconSrc" src="{ iconSrc }" alt="{ iconAlt }" class="article-icon col-xs-1">
					<div class="col-xs-9">
						<h1 itemprop="name headline">{ heading }</h1>
						<p class="lead">{ teaser }</p>
						<p class="small">Published <span itemprop="datePublished">{ publishDate.substring(0, 10) }</span></p>
					</div>
				</a>
			</div>
			<div class="row">
				<div itemprop="articleBody" class="col-xs-12 articleBody"><raw content="{ ingressHtml }" /></div>
			</div>
		</article>
	</div>

	<script>
		const hljs = this.mixin('hljs');

		opts.articles
			.then((articles) => {
				this.articles = articles;
				this.update();
		});

		this.on('updated', () => {
			if (hljs) {
				var blocks = document.querySelectorAll('pre code');
				blocks.forEach((block) => {
					hljs.highlightBlock(block);
				});
			}
        });
	</script>

</article-list>