/* eslint-disable no-unused-vars */

/* #region REVIEW: APPROVAL WORKFLOW */

export enum StatusProductApproveOnMarket {
  Approved = 'approved',
  PreApproved = 'pre_approved',
  WaitForCheck = 'wait_check',
  Hold = 'hold',
  None = 'none'
}

export enum StatusApprovalFlow {
  WaitForCheck = 'wait_for_check',
  WaitForApproval = 'wait_for_approval',
  ToRevise = 'to_revise',
  Rejected = 'rejected',
  Approved = 'approved'
}

export enum StatusReviewerAction {
  ToCheck = 'to_check',
  WaitForRevision = 'wait_for_revision',
  WaitForApproval = 'wait_for_approval'
}

export enum StatusReviewerIdx {
  ToCheck = 'TO_CHECK',
  Revised = 'REVISED', // TODO How to list with to check
  WaitForRevision = 'W_REVISION',
  WaitForApproval = 'W_APPROVAL',
  Rejected = 'REJECTED',
  Approved = 'APPROVED'
}

export enum StatusApproverAction {
  ToApprove = 'to_approve',
  Rejected = 'rejected',
  Approved = 'approved'
}

export enum StatusApproverIdx {
  ToApprove = 'TO_APPROVE',
  Rejected = 'REJECTED',
  Approved = 'APPROVED'
}

export enum StatusInquirySender {
  Waiting = 'waiting',
  Replied = 'replied'
}

export enum StatusInquiryReceiver {
  ToReply = 'to_reply',
  Replied = 'replied'
}

export enum StatusRfqSender {
  Published = 'published',
  Quoted = 'quoted',
  Waiting = 'waiting',
  Replied = 'replied'
}

export enum StatusRfqReceiver {
  ToQuote = 'to_quote',
  Replied = 'replied',
  Quoted = 'quoted',
  ToReply = 'to_reply'
}

export enum StatusQuotationSender {
  Draft = 'draft',
  Quoted = 'quoted',
  InApproval = 'in_approval',
  Accepted = 'accepted',
  Declined = 'declined',
  Expired = 'expired',
  Replied = 'replied',
  Waiting = 'waiting',
  OnPurchasing = 'on_purchasing'
}

export enum StatusQuotationReceiver {
  ToDecide = 'to_decide',
  Approved = 'approved',
  Replied = 'replied',
  Declined = 'declined',
  Waiting = 'waiting',
  OnPurchasing = 'on_purchasing'
}

export enum StatusPOSender {
  Draft = 'draft',
  Issued = 'issued',
  InApproval = 'in_approval',
  Confirmed = 'confirmed',
  WaitForSO = 'wait_for_so'
}

export enum StatusPOReceiver {
  ToConfirm = 'to_confirm',
  Confirmed = 'confirmed',
  ToCreateSO = 'to_create_so'
}

export enum StatusSOSender {
  Draft = 'draft',
  Issued = 'issued',
  InApproval = 'in_approval',
  Confirmed = 'confirmed'
}

export enum StatusSOReceiver {
  ToConfirm = 'to_confirm',
  Confirmed = 'confirmed'
}

export enum StatusDocSender {
  Draft = 'draft',
  Issued = 'issued',
  InApproval = 'in_approval'
}
/* #endregion */

export enum TextMenu {
  createRfq = ''
}
