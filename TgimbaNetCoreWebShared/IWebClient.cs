﻿using TgimbaNetCoreWebShared.Models;
using System.Collections.Generic;
using Shared.dto;

namespace TgimbaNetCoreWebShared
{
	public interface IWebClient
	{
		string Login(string encodedUser, string encodedPass);
		bool Registration(string encodedUser, string encodedEmail, string encodedPassword);
		bool AddBucketListItem
		(
			SharedBucketListModel bucketListItem,
			string encodedUser, 
			string encodedToken
		);
		bool EditBucketListItem
		(
			SharedBucketListModel bucketListItem,
			string encodedUser, 
			string encodedToken
		);
		bool DeleteBucketListItem
		(
			string dbId,
			string encodedUser, 
			string encodedToken
		);
		List<SharedBucketListModel> GetBucketListItems
		(
			string encodedUserName, 
			string encodedSortString, 
			string encodedToken,
			string encodedSrchTerm = ""
		);
        List<SystemStatistic> GetSystemStatistics(string userName, string token);
        List<SystemBuildStatistic> GetSystemBuildStatistics(string userName, string token);

    }
}
