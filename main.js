function sys()
{
	if(navigator.appName=='Microsoft Internet Explore')
	{
		document.getElementById("sysmsg").innerHTML='��ʹ�õ��������΢��˾��IE�����'<br>;
	}
		document.getElementById("sysmsg").innerHTML+='��ʹ�õ���Ļ�ֱ���Ϊ'+screen.width+'��'+screen.height;
}
function addFav(title)
{
	var url=location.href;
	if (window.sidebar)
	{
		window.sidebar.addPanel(title,url,"");
	}
	else if(document.all)
	{
		window.external.AddFavorite(url,title);
	}
	else if(window.opera&&window.print)
	{
		return true;
	}
}
window.onload=sys;