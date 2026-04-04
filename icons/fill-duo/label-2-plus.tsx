import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Plus({
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
          d="M17.833 8.5278L13.8838 3.6504C13.5498 3.2368 13.0547 3 12.5234 3H5.25C3.7334 3 2.5 4.2334 2.5 5.75V9.6382C2.7358 9.5542 2.9858 9.5 3.25 9.5C4.4902 9.5 5.5 10.5093 5.5 11.75V12H5.75C6.9902 12 8 13.0093 8 14.25C8 14.5142 7.9459 14.7642 7.8618 15H12.5235C13.0547 15 13.5499 14.7632 13.8829 14.3511L17.8331 9.4722C18.0558 9.1968 18.0557 8.8032 17.833 8.5278Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75 13.5H4V11.75C4 11.3359 3.6641 11 3.25 11C2.8359 11 2.5 11.3359 2.5 11.75V13.5H0.75C0.3359 13.5 0 13.8359 0 14.25C0 14.6641 0.3359 15 0.75 15H2.5V16.75C2.5 17.1641 2.8359 17.5 3.25 17.5C3.6641 17.5 4 17.1641 4 16.75V15H5.75C6.1641 15 6.5 14.6641 6.5 14.25C6.5 13.8359 6.1641 13.5 5.75 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Label2Plus;
