import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveBookmark({
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
          d="M15.25 9.5H11.75C11.3359 9.5 11 9.8359 11 10.25V11.75C11 11.8877 10.8877 12 10.75 12H7.25C7.1123 12 7 11.8877 7 11.75V10.25C7 9.8359 6.6641 9.5 6.25 9.5H3.5V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H8.75199C9.16609 3.5 9.50199 3.1641 9.50199 2.75C9.50199 2.3359 9.16609 2 8.75199 2H4.75C3.2334 2 2 3.2334 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25V10.25C16 9.8359 15.6641 9.5 15.25 9.5Z"
          fill={fill}
        />
        <path
          d="M15.25 0H12.75C11.7852 0 11 0.7852 11 1.75V7.25C11 7.5532 11.1826 7.8267 11.4629 7.9429C11.7432 8.0596 12.0654 7.9947 12.2803 7.7803L14 6.0606L15.7197 7.7803C15.8633 7.9239 16.0547 8 16.25 8C16.3467 8 16.4443 7.9814 16.5371 7.9429C16.8174 7.8267 17 7.5533 17 7.25V1.75C17 0.7852 16.2148 0 15.25 0Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArchiveBookmark;
