import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageBubbleUser({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M4.55103 11.5053C5.7937 11.5053 6.80103 10.4984 6.80103 9.2553C6.80103 8.01218 5.7937 7.0053 4.55103 7.0053C3.30835 7.0053 2.30103 8.01218 2.30103 9.2553C2.30103 10.4984 3.30846 11.5053 4.55103 11.5053Z"
          fill={fill}
        />
        <path
          d="M0.0375177 15.7711C0.660669 13.8755 2.44447 12.5053 4.55101 12.5053C6.65755 12.5053 8.44134 13.8755 9.06449 15.7711C9.13961 15.9996 9.10058 16.2503 8.95953 16.4451C8.81848 16.6399 8.59254 16.7553 8.35201 16.7553H0.750006C0.50947 16.7553 0.28353 16.6399 0.142483 16.4451C0.00143576 16.2503 -0.0376012 15.9996 0.0375177 15.7711Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 2.25C8 1.00779 9.00779 0 10.25 0H15.75C16.9922 0 18 1.00779 18 2.25V5.75C18 6.99221 16.9922 8 15.75 8H13.8299L11.3029 10.7568C11.0939 10.9848 10.7664 11.0611 10.4781 10.949C10.1899 10.8369 10 10.5593 10 10.25V7.98625C8.87534 7.86181 8 6.90771 8 5.75V2.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MessageBubbleUser;
