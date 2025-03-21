const dateElement = document.getElementById("date");
const linksContainer = document.getElementById("links");

const categories = [
	{
		title: "~/social",
		links: [
			{ name: "WhatsApp", url: "https://web.whatsapp.com/" },
			{ name: "Telegram", url: "https://web.telegram.org/" },
			{ name: "Discord", url: "https://discord.com/app" },
			{ name: "YouTube", url: "https://www.youtube.com/" },
			{ name: "Reddit", url: "https://www.reddit.com/" },
			{ name: "LinkedIn", url: "https://www.linkedin.com/" },
			{ name: "Facebook", url: "https://www.facebook.com/" },
		]
	},
	{
		title: "~/cp",
		links: [
			{ name: "Codeforces", url: "https://codeforces.com" },
			{ name: "LeetCode", url: "https://leetcode.com" },
			{ name: "AtCoder", url: "https://atcoder.jp/" },
			{ name: "HackerRank", url: "https://www.hackerrank.com/" },
			{ name: "CodinGame", url: "https://www.codingame.com/" }
		]
	},
	{
		title: "~/ctf",
		links: [
			{ name: "picoCTF", url: "https://picoctf.org" },
			{ name: "OverTheWire", url: "https://overthewire.org/wargames/" },
			{ name: "Hack The Box", url: "https://hackthebox.com" },
			{ name: "TryHackMe", url: "https://tryhackme.com" },
			{ name: "Root-Me", url: "https://www.root-me.org/" },
			{ name: "RingZer0CTF", url: "https://ringzer0ctf.com/" },
		]
	},
	{
		title: "~/development",
		links: [
			{ name: "GitHub", url: "https://github.com" },
			{ name: "Stack Overflow", url: "https://stackoverflow.com/" },
			{ name: "CodePen", url: "https://codepen.io/" },
			{ name: "JSFiddle", url: "https://jsfiddle.net/" },
			{ name: "Azure services", url: "https://portal.azure.com/" },
			{ name: ".NET Docs", url: "https://learn.microsoft.com/en-us/dotnet/" },
			{ name: "Postman", url: "https://www.postman.com/" },
			{ name: "Dev.to", url: "https://dev.to/" },
			{ name: "Slack", url: "https://slack.com/" },
		]
	},
	{
		title: "~/learn",
		links: [
			{ name: "Coursera", url: "https://www.coursera.org/" },
			{ name: "Udemy", url: "https://www.udemy.com/" },
			{ name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
		]
	},
	{
		title: "~/ai",
		links: [
			{ name: "Hugging Face", url: "https://huggingface.co" },
			{ name: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" },
			{ name: "Papers with Code", url: "https://paperswithcode.com" },
			{ name: "arXiv AI", url: "https://arxiv.org/list/cs.AI/recent" }
		]

	},
	{
		title: "~/linux",
		links: [
			{ name: "Arch Wiki", url: "https://wiki.archlinux.org/" },
			{ name: "aur", url: "https://aur.archlinux.org/packages" },
			{ name: "nixpkgs", url: "https://search.nixos.org/packages" },
		]
	},
	{
		title: "~/tools",
		links: [
			{ name: "Gmail", url: "https://mail.google.com" },
			{ name: "Notion", url: "https://www.notion.so/" },
			{ name: "regex101", url: "https://regex101.com/" },
			{ name: "Draw.io", url: "https://app.diagrams.net/" },
			{ name: "Excalidraw", url: "https://excalidraw.com/" },

		]
	},
];

categories.forEach(({ title, links }) => {
	const section = document.createElement("div");
	section.className = "urls";

	const header = document.createElement("div");
	header.className = "header";
	header.textContent = title;

	const ul = document.createElement("ul");
	links.forEach(({ name, url }) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.href = url;
		a.textContent = name;
		li.appendChild(a);
		ul.appendChild(li);
	});

	section.appendChild(header);
	section.appendChild(ul);
	linksContainer.appendChild(section);
});

function showTime() {
	const now = new Date();
	const options = {
		weekday: "long",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		day: "2-digit",
		month: "2-digit",
		year: "2-digit",
	};
	const [weekday, time, date] = now.toLocaleString("en-GB", options).split(", ");
	dateElement.textContent = `${weekday}, ${time}, ${date}`;
}

setInterval(showTime, 1000);
showTime();
