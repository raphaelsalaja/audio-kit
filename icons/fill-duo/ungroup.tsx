import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ungroup({
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
          d="M15.2501 15.5H4.75012C3.23352 15.5 2.00012 14.2666 2.00012 12.75V2.75C2.00012 2.3359 2.33602 2 2.75012 2C3.16422 2 3.50012 2.3359 3.50012 2.75V12.75C3.50012 13.4395 4.06062 14 4.75012 14H15.2501C15.6642 14 16.0001 14.3359 16.0001 14.75C16.0001 15.1641 15.6642 15.5 15.2501 15.5Z"
          fill={fill}
        />
        <path
          d="M15.2501 9C14.836 9 14.5001 8.6641 14.5001 8.25V3.5H9.75012C9.33602 3.5 9.00012 3.1641 9.00012 2.75C9.00012 2.3359 9.33602 2 9.75012 2H15.2501C15.6642 2 16.0001 2.3359 16.0001 2.75V8.25C16.0001 8.6641 15.6642 9 15.2501 9Z"
          fill={fill}
        />
        <path
          d="M11.2501 6H7.75008C7.33598 6 7.00008 6.3359 7.00008 6.75C7.00008 7.1641 7.33598 7.5 7.75008 7.5H9.43958L6.21987 10.7197C5.92687 11.0127 5.92687 11.4873 6.21987 11.7802C6.36637 11.9267 6.55778 11.9999 6.75018 11.9999C6.94258 11.9999 7.13398 11.9267 7.28048 11.7802L10.5002 8.56055V10.25C10.5002 10.6641 10.8361 11 11.2502 11C11.6643 11 12.0002 10.6641 12.0002 10.25V6.75C12.0002 6.3359 11.6642 6 11.2501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Ungroup;
