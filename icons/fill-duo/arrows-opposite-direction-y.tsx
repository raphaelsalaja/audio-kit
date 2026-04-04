import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsOppositeDirectionY({
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
          d="M14.4697 11.9697L12.5 13.9394V7.74991C12.5 7.33581 12.1641 6.99991 11.75 6.99991C11.3359 6.99991 11 7.33581 11 7.74991V13.9394L9.03029 11.9697C8.73729 11.6767 8.26267 11.6767 7.96977 11.9697C7.67687 12.2627 7.67677 12.7373 7.96977 13.0302L11.2198 16.2802C11.3663 16.4267 11.5577 16.4999 11.7501 16.4999C11.9425 16.4999 12.1339 16.4267 12.2804 16.2802L15.5304 13.0302C15.8234 12.7372 15.8234 12.2626 15.5304 11.9697C15.2374 11.6768 14.7626 11.6767 14.4697 11.9697Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.96969 6.0303C9.11619 6.1768 9.30759 6.24999 9.49999 6.24999C9.69239 6.24999 9.8838 6.1768 10.0303 6.0303C10.3233 5.7373 10.3233 5.26268 10.0303 4.96978L6.7803 1.71978C6.4873 1.42678 6.01268 1.42678 5.71978 1.71978L2.4698 4.96978C2.1768 5.26278 2.1768 5.7374 2.4698 6.0303C2.7628 6.3232 3.2374 6.3233 3.5303 6.0303L5.49999 4.0606V10.2501C5.49999 10.6642 5.83589 11.0001 6.24999 11.0001C6.66409 11.0001 6.99999 10.6642 6.99999 10.2501V4.0606L8.96969 6.0303Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsOppositeDirectionY;
