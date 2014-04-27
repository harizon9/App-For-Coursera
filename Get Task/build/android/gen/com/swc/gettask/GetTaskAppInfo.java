package com.swc.gettask;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class GetTaskAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";

	public GetTaskAppInfo(TiApplication app) {
	}

	public String getDeployType() {
		return "test";
	}

	public String getId() {
		return "com.swc.gettask";
	}

	public String getName() {
		return "Get Task";
	}

	public String getVersion() {
		return "1.0";
	}

	public String getPublisher() {
		return "HN";
	}

	public String getUrl() {
		return "http://";
	}

	public String getCopyright() {
		return "2014 by HN";
	}

	public String getDescription() {
		return "Fill the gaps in your life";
	}

	public String getIcon() {
		return "appicon.png";
	}

	public boolean isAnalyticsEnabled() {
		return true;
	}

	public String getGUID() {
		return "cd71b3fd-d1e0-46c4-8aee-69b1e17dd8f6";
	}

	public boolean isFullscreen() {
		return true;
	}

	public boolean isNavBarHidden() {
		return true;
	}
}
