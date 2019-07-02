﻿var Display = {};

Display.HtmlContent = {};

Display.SetView = function (view, contentDiv, loadedView, htmlContent) {	
	contentDiv.innerHTML = loadedView;
	
	var systemStatsDiv = document.getElementById('systemStatistics');
	if (systemStatsDiv) {
	    systemStatsDiv.innerHTML = "Loading...";
	    ServerCalls.GetAjaxView(VIEW_PARTIAL_SYSTEM_STATISTICS, systemStatsDiv, null);
	}
};

Display.SetAjaxView = function (view, contentDiv, loadedView, htmlContent) {
    contentDiv.innerHTML = loadedView;
    setTimeout(Display.Refresh, 1000);
    WelcomeServerCalls.GetSystemStatistics();
};

Display.SetSystemStatistics = function (systemStatistics) {
    Display.SetSystemStats(systemStatistics.systemStats);
    Display.SetSystemBuildStats(systemStatistics.systemBuildStats);
}

Display.SetSystemBuildStats = function (systemBuildStatistics) {
    var systemBuildStatisticData = document.getElementById('systemBuildStatisticsData');

    if (systemBuildStatisticData) {
        var tbl = Display.BuildSystemBuildStatsTableHeader();
        for (var i = 0; i < systemBuildStatistics.length; i++) {
            tbl += '<tr>';

            tbl += '<td>' + systemBuildStatistics[i].start + '</td>';
            tbl += '<td>' + systemBuildStatistics[i].end + '</td>';
            tbl += '<td>' + systemBuildStatistics[i].buildNumber + '</td>';
            tbl += '<td>' + systemBuildStatistics[i].status + '</td>';
            tbl += '<td>' + systemBuildStatistics[i].buildSource + '</td>';

            tbl += '</tr>';
        }
        tbl += '</table>';

        systemBuildStatisticData.innerHTML = tbl;
    }
}

Display.BuildSystemBuildStatsTableHeader = function () {
    var tblHdr = '<table><tr>';

    tblHdr += '<td>Start</td>';
    tblHdr += '<td>End</td>';
    tblHdr += '<td>Build Number</td>';
    tblHdr += '<td>Status</td>';
    tblHdr += '<td>Build Source</td>';

    tblHdr += '</tr>';

    return tblHdr;
}


Display.SetSystemStats = function (systemStatistics) {
    var systemStatisticData = document.getElementById('systemStatisticsData');

    if (systemStatisticData) {
        var tbl = Display.BuildSystemStatsTableHeader();
        for (var i = 0; i < systemStatistics.length; i++) {
            tbl += '<tr>';

            tbl += '<td>' + systemStatistics[i].webSiteIsUp + '</td>';
            tbl += '<td>' + systemStatistics[i].databaseIsUp + '</td>';
            tbl += '<td>' + systemStatistics[i].azureFunctionIsUp + '</td>';
            tbl += '<td>' + systemStatistics[i].created + '</td>';

            tbl += '</tr>';
        }
        tbl += '</table>';

        systemStatisticData.innerHTML = tbl;
    }
}

Display.BuildSystemStatsTableHeader = function () {
    var tblHdr = '<table><tr>';

    tblHdr += '<td>Site Is Up</td>';
    tblHdr += '<td>Db Is Up</td>';
    tblHdr += '<td>Azure Func Is Up</td>';
    tblHdr += '<td>Created</td>';

    tblHdr += '</tr>';

    return tblHdr;
}

Display.Refresh = function () {
    var line1 = document.getElementById("statusLine1");
    var line2 = document.getElementById("statusLine2");
    var line3 = document.getElementById("statusLine3");

    if (line1 && line2 && line3)
    {
        if (line1.style.cssText === WELCOME_STATUS_LINE_GREEN_ANGLE)
        {
            line1.style.cssText = WELCOME_STATUS_LINE_BLACK_ANGLE;
            line2.style.cssText = WELCOME_STATUS_LINE_BLACK_ANGLE;
            line3.style.cssText = WELCOME_STATUS_LINE_BLACK_HORIZ;
        } else {
            line1.style.cssText = WELCOME_STATUS_LINE_GREEN_ANGLE;
            line2.style.cssText = WELCOME_STATUS_LINE_GREEN_ANGLE;
            line3.style.cssText = WELCOME_STATUS_LINE_GREEN_HORIZ;
        }
    }
    
    setTimeout(Display.Refresh, 1000);
};
		
Display.LoadView = function(view, htmlContent) { 
    var contentDiv = Display.GetContentDiv();  
    ServerCalls.GetView(view, contentDiv, htmlContent);
};

Display.GetContentDiv = function() {      
    var contentDiv = document.getElementById(WELCOME_CONTENT_DIV);
    
    isNullUndefined(contentDiv, 'Display.js', 'contentDiv');

    return contentDiv;
};
