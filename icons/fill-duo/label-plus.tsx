import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LabelPlus({
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
          d="M12 15.25V15H11.75C10.5093 15 9.5 13.9907 9.5 12.75C9.5 11.5093 10.5093 10.5 11.75 10.5H12V10.25C12 9.00929 13.0093 7.99999 14.25 7.99999C14.5143 7.99999 14.7643 8.05419 15 8.13819V7.04049C15 6.26459 14.6699 5.52099 14.0947 5.00089L10.1743 1.45399C9.5044 0.848488 8.4951 0.848488 7.8262 1.45399L3.9053 5.00089C3.3301 5.52089 3 6.26459 3 7.04049V14.25C3 15.7661 4.2334 17 5.75 17H12.25C12.434 17 12.6134 16.9802 12.7874 16.9458C12.3094 16.5327 12 15.9297 12 15.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 8C9.69036 8 10.25 7.44036 10.25 6.75C10.25 6.05964 9.69036 5.5 9 5.5C8.30964 5.5 7.75 6.05964 7.75 6.75C7.75 7.44036 8.30964 8 9 8Z"
          fill={fill}
        />
        <path
          d="M16.75 12H15V10.25C15 9.8359 14.6641 9.5 14.25 9.5C13.8359 9.5 13.5 9.8359 13.5 10.25V12H11.75C11.3359 12 11 12.3359 11 12.75C11 13.1641 11.3359 13.5 11.75 13.5H13.5V15.25C13.5 15.6641 13.8359 16 14.25 16C14.6641 16 15 15.6641 15 15.25V13.5H16.75C17.1641 13.5 17.5 13.1641 17.5 12.75C17.5 12.3359 17.1641 12 16.75 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LabelPlus;
