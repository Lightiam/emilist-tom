import { useState } from "react";

import toast from "react-hot-toast";

import { toastOptions } from "@/helpers";
import { axiosInstance } from "@/axiosInstance/baseUrls";

export const useGetJobInfo = () => {
  const [jobInfo, setJobInfo] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [currentMilestone, setCurrentMilestone] = useState<any>({});
  const [analytics, setAnalytics] = useState<any>({});

  const getJobInfo = async (jobId: string) => {
    try {
      const { data } = await axiosInstance.get(
        `/jobs/fetch-job-by-id?id=${jobId}`
      );
      setJobInfo(data?.data?.job);
      setAnalytics(data?.data);
      setCurrentMilestone(data?.data?.job?.milestones[0]);
    } catch (error: any) {
      console.log("error getting job info", error);
      toast.error("Network error", toastOptions);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    getJobInfo,
    jobInfo,
    currentMilestone,
    setCurrentMilestone,
    analytics,
  };
};
