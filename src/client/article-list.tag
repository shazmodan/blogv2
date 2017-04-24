<article-list>

	<div each={ articles } class="row article-list">
		<article class="article-post col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" itemscope="" itemtype="http://schema.org/BlogPosting">
			<div class="row">
				<a class="link" href="{ name }" itemprop="url">
					<img itemprop="image" ng-if="article.iconSrc" src="{ iconSrc }" alt="{ iconAlt }" class="article-icon col-xs-1">
					<div class="col-xs-9">
						<h1 itemprop="name headline">{ heading }</h1>
						<p class="lead">{ teaser }</p>
						<p class="small">Published <span itemprop="datePublished">{ publishDate }</span></p>
					</div>
				</a>
			</div>
			<div class="row">
				<div itemprop="articleBody" class="col-xs-12">{ ingressHtml }</div>
			</div>
		</article>
	</div>

	<script>
		this.articles = [{
			iconSrc: "/static/img/node.svg",
			iconAlt: "node",
			name: "creating-a-blog-with-nodejs",
			heading: "Creating a blog with NodeJS",
			teaser: "Entering unknown territory.",
			ingressHtml: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. Cyrenaici quidem non recusant; <i>Sed ille, ut dixi, vitiose.</i> <mark>Duo Reges: constructio interrete.</mark> An nisi populari fama? Iubet igitur nos Pythius Apollo noscere nosmet ipsos. Sed nimis multa. Restatis igitur vos; </p>",
			bodyHtml: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum dixisset, finem ille. Cyrenaici quidem non recusant; <i>Sed ille, ut dixi, vitiose.</i> <mark>Duo Reges: constructio interrete.</mark> An nisi populari fama? Iubet igitur nos Pythius Apollo noscere nosmet ipsos. Sed nimis multa. Restatis igitur vos; </p> <p>Quod ea non occurrentia fingunt, vincunt Aristonem; Minime vero, inquit ille, consentit. Istam voluptatem, inquit, Epicurus ignorat? Minime vero, inquit ille, consentit. Tuo vero id quidem, inquam, arbitratu. <b>Recte, inquit, intellegis.</b> Quis istud, quaeso, nesciebat? </p><p>Nescio quo modo praetervolavit oratio. <mark>Quis Aristidem non mortuum diligit?</mark> Primum divisit ineleganter; <i>Que Manilium, ab iisque M.</i> Videsne, ut haec concinant? Quae cum essent dicta, discessimus. Itaque ab his ordiamur. </p> <ul> <li>Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L.</li> <li>In motu et in statu corporis nihil inest, quod animadvertendum esse ipsa natura iudicet?</li> </ul> <p>At enim sequor utilitatem. Sin aliud quid voles, postea. </p> <p>Quod vestri non item. Erat enim Polemonis. <mark>Aliter autem vobis placet.</mark> Primum quid tu dicis breve? </p>",
			publishDate: "2016-01-01T12:35:00.0000000Z",
			tags: ["node", "javascript"]
		}, {
			iconSrc: "/static/img/ravendb.png",
			iconAlt: "ravendb",
			name: "doing-magic-with-ravendb",
			heading: "Doing magic with RavenDB",
			teaser: "Exploring the surface of a document database.",
			ingressHtml: "<p>This ingress cuts out the first paragraph tag</p>",
			bodyHtml: "<p>RavenDB is a document database for .NET.</p><p>It might be nicer than MongoDB</p>",
			publishDate: "2016-01-02T19:57:32.7060000Z",
			tags: ["ravendb", "nosql"]
		}];

	</script>

</article-list>