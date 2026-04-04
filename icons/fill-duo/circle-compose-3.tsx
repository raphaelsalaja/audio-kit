import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCompose3({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.9203 2.10469C17.0492 1.86207 17.0351 1.56839 16.8836 1.33921C16.7321 1.11003 16.4674 0.982029 16.1937 1.00558C11.5935 1.40129 8.92498 3.89611 7.4184 6.37012C5.92835 8.817 5.56482 11.2509 5.50782 11.6418C5.44806 12.0517 5.73189 12.4324 6.14177 12.4922C6.55165 12.5519 6.93237 12.2681 6.99213 11.8582C7.01886 11.6749 7.13344 10.9067 7.4627 9.88243C7.66774 9.9158 7.87256 9.95107 8.0774 9.98635C8.4907 10.0575 8.90407 10.1287 9.31953 10.1844C10.5757 10.3525 11.9097 10.3279 13.0091 9.81425C13.5291 9.57128 13.9762 9.22841 14.3298 8.77989C13.2293 8.62136 12.2835 8.05888 11.85 7.70001C12.627 7.70001 13.4396 7.66594 14.154 7.45121C14.5836 7.32212 14.9751 7.12566 15.3021 6.84819C15.7257 6.48866 16.0446 5.99332 16.2166 5.33291C16.34 4.85895 16.4058 4.36632 16.4827 3.88323C16.5104 3.70902 16.5367 3.54344 16.5631 3.39056C16.6634 2.80913 16.7659 2.39542 16.9203 2.10469Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCompose3;
