import Topbar from "./Topbar";


function Mission() {
		const SourcesLink = () => {
			const pdfUrl = "/Webmater-24-25/Webmaster Research Source Citations.pdf";
			const link = document.createElement("a");
			link.href = pdfUrl;
			link.download = "Webmaster Research Source Citations.pdf"; // specify the filename
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
		const SweatLink = () => {
			const pdfUrl = "/Webmater-24-25/planOfWork.pdf";
			const link = document.createElement("a");
			link.href = pdfUrl;
			link.download = "planOfWork.pdf";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
		const CopyrightLink = () => {
			const pdfUrl = "/Webmater-24-25/TSA Student Copyright 24-25 .pdf";
			const link = document.createElement("a");
			link.href = pdfUrl;
			link.download = "TSA Student Copyright 24-25.pdf";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
	return (
		<>
			<Topbar />
			<div className="full-grid-3">
				<div className = "hero-section-docs">
					<div className="docs-title">
						<h1 className="docs-title-yap">Documentation and Sources</h1>
						<ul className = "sauces-list">
							<li>Wondering where we get all of these goodies and info from? 
							<br></br>
							check out below!</li>	
							<li> All fonts on this site were acquired 
								under a personal use license, and all images
								are under a free to use license.

							</li>	
							<li>
								<button className="download-button" onClick={SourcesLink}>
									Download our sources PDF!
								</button>
							</li>
							<li>
								<button className="download-button" onClick={SweatLink}>
									Download our plan of work log!!
								</button>
							</li>
							<li>
								<button className="download-button" onClick={CopyrightLink}>
									Download our Copyright Form!
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Mission;