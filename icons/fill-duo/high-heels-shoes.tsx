import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HighHeelsShoes({
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
          d="M3.68554 2.06911C4.04953 1.901 4.48138 2.04891 4.66588 2.40488C6.67681 6.28476 9.97174 9.4543 13.2037 11.2461C13.5087 11.4152 13.8674 11.5 14.25 11.5C15.7692 11.5 17 12.7308 17 14.25V14.75C17 15.4402 16.4402 16 15.75 16H12.183C11.2532 16 10.3595 15.5359 9.85839 14.7177C9.24635 13.7181 8.14658 12.3397 6.34077 11.4673C5.33317 10.9814 4.38683 10.7869 3.6688 10.7097C3.56458 10.6985 3.46387 10.6656 3.37316 10.613C1.95626 9.79254 1 8.2586 1 6.5C1 4.60771 2.12689 2.78896 3.68554 2.06911Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 10.373V15.25C3 15.6642 3.33579 16 3.75 16C4.16421 16 4.5 15.6642 4.5 15.25V10.8415C4.19972 10.7782 3.92026 10.7367 3.6688 10.7097C3.56458 10.6985 3.46387 10.6656 3.37316 10.613C3.24487 10.5387 3.12036 10.4586 3 10.373Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HighHeelsShoes;
