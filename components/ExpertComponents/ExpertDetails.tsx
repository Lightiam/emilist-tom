"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import ReviewProfile from "./ReviewProfile";
import ContactModal from "../modals/ContactModal";
import ExpertMainContent from "./ExpertMainContent";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import AboutBusinessOwner from "./AboutBusinessOwner";

import { AuthContext } from "@/utils/AuthState";
import { useGetServiceInfo } from "@/hooks/useGetServiceInfo";
import ShareLink from "../modals/ShareLink";

interface ExpertDetailsProps {
  businessId: string;
}

const ExpertDetails = ({ businessId }: ExpertDetailsProps) => {
  const { loading, getServiceInfo, serviceInfo } = useGetServiceInfo();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openShareModal, setOpenShareModal] = useState<boolean>(false);

  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  const handleOpenModal = () => {
    if (!currentUser) {
      router.push("/login");
      return;
    }
    setOpenModal(true);
  };

  const handleOpen = () => {
    setOpenShareModal(true);
  };

  useEffect(() => {
    getServiceInfo(businessId);
  }, [businessId]);

  return (
    <div className="py-8">
      {loading ? (
        <div className="flex item-center justify-center text-green-500 mt-6 h-[70vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="padding-x py-28">
          <ReviewProfile serviceInfo={serviceInfo} handleOpen={handleOpen} />
          <ExpertMainContent
            handleOpenModal={handleOpenModal}
            serviceInfo={serviceInfo}
          />
          <div className=" max-w-[676px] w-full flex-c-b pb-6 flex-wrap gap-2">
            <h6 className="sm:text-2xl text-lg font-semibold whitespace-nowrap">
              What people loved about this seller
            </h6>
            <Link
              href={`/expert/reviews/${businessId}`}
              className="max-sm:text-sm text-primary-green whitespace-nowrap"
            >
              See all reviews
            </Link>
          </div>
          <ReviewSlider />
          <AboutBusinessOwner
            serviceInfo={serviceInfo}
            handleOpenModal={handleOpenModal}
            setIsOpen={setIsOpen}
          />
          {/* contact modal */}
          <ContactModal
            isOpen={openModal}
            onCancel={() => setOpenModal(false)}
            user={serviceInfo?.userId}
          />
          {/* Share modal */}
          <ShareLink
            handleCancel={() => setOpenShareModal(false)}
            isModalOpen={openShareModal}
            link={`https://emilist.com/expert/info/${businessId}`}
            title="Share business"
            textToCopy="Check out this business on Emilist"
          />
        </div>
      )}
    </div>
  );
};

export default ExpertDetails;
