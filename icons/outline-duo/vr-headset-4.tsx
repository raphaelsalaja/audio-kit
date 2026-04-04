import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset4({
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
          d="M9 4.75C11.073 4.75 13.654 4.827 14.933 5.863C16.212 6.899 16.689 7.969 16.433 9.886C16.177 11.803 15.018 12.838 13.677 13.149C12.336 13.46 11.246 13.007 10.685 12.399C10.08 11.743 9.76 11.184 9 11.184C8.24 11.184 7.92 11.743 7.315 12.399C6.754 13.007 5.664 13.46 4.323 13.149C2.982 12.838 1.822 11.803 1.567 9.886C1.311 7.969 1.789 6.899 3.067 5.863C4.346 4.827 6.927 4.75 9 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.75C11.073 4.75 13.654 4.827 14.933 5.863C16.212 6.899 16.689 7.969 16.433 9.886C16.177 11.803 15.018 12.838 13.677 13.149C12.336 13.46 11.246 13.007 10.685 12.399C10.08 11.743 9.76 11.184 9 11.184C8.24 11.184 7.92 11.743 7.315 12.399C6.754 13.007 5.664 13.46 4.323 13.149C2.982 12.838 1.822 11.803 1.567 9.886C1.311 7.969 1.789 6.899 3.067 5.863C4.346 4.827 6.927 4.75 9 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default VrHeadset4;
