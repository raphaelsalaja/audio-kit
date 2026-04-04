import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderPointer({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M13.2 18.0007C12.7693 18.0007 12.3826 17.7321 12.2332 17.3259L10.0633 11.3845C9.92356 11.0036 10.0144 10.5896 10.3016 10.3025C10.5887 10.0163 11.0008 9.92554 11.3836 10.0642L17.324 12.2341C17.7381 12.3855 18.0086 12.7829 17.9998 13.2234C17.99 13.6629 17.7019 14.0486 17.284 14.1824L14.9334 14.9344L14.1805 17.285C14.0477 17.703 13.6619 17.9911 13.2225 18.0008L13.2 18.0007Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H10.152L8.65458 11.8998C8.31784 10.9803 8.55031 9.93227 9.24259 9.24021C9.94357 8.54143 10.9681 8.31828 11.8946 8.65395L16.5 10.3362V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderPointer;
