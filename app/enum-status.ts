/* eslint-disable no-unused-vars */
/* #region REVIEW: APPROVAL WORKFLOW */

export enum StatusApprovalFlow {
  WaitForCheck = 'wait for check',
  WaitForApproval = 'wait for approval',
  ToRevise = 'to revise',
  Rejected = 'rejected',
  Approved = 'approved'
}

export enum StatusReviewerAction {
  ToCheck = 'to check',
  WaitForRevision = 'wait for revision',
  WaitForApproval = 'wait for approval'
}

export enum StatusApproverAction {
  ToApprove = 'to approve',
  Rejected = 'rejected',
  Approved = 'approved'
}

export enum StatusInquirySender {
  Waiting = 'waiting',
  Replied = 'replied',
}

export enum StatusInquiryReceiver {
  ToReply = 'to reply',
  Replied = 'replied'
}

export enum StatusRfqSender {
  Published = 'published',
  Quoted = 'quoted',
  Waiting = 'waiting',
  Replied = 'replied'
}

export enum StatusRfqReceiver {
  ToQuote = 'to quote',
  Replied = 'replied',
  Quoted = 'quoted',
  ToReply = 'to reply'
}

export enum StatusQuotationSender {
  Draft = 'draft',
  Quoted = 'quoted',
  InApproval = 'in approval',
  Accepted = 'accepted',
  Declined = 'declined',
  Expired = 'expired',
  Replied = 'replied',
  Waiting = 'waiting',
  OnPurchasing = 'on purchasing'
}

export enum StatusQuotationReceiver {
  ToDecide = 'to decide',
  Approved = 'approved',
  Replied = 'replied',
  Declined = 'declined',
  Waiting = 'waiting',
  OnPurchasing = 'on purchasing'
}

export enum StatusPOSender {
  Draft = 'draft',
  Issued = 'issued',
  InApproval = 'in approval',
  Confirmed = 'confirmed',
  WaitForSO = 'wait for so',
}

export enum StatusPOReceiver {
  ToConfirm = 'to confirm',
  Confirmed = 'confirmed',
  ToCreateSO = 'to create so',
}

export enum StatusSOSender {
  Draft = 'draft',
  Issued = 'issued',
  InApproval = 'in approval',
  Confirmed = 'confirmed'
}

export enum StatusSOReceiver {
  ToConfirm = 'to confirm',
  Confirmed = 'confirmed'
}

export enum StatusDocSender {
  Draft = 'draft',
  Issued = 'issued',
  InApproval = 'in approval'
}
/* #endregion */

export enum TextMenu {
  createRfq = ''
}
