import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Star2({
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
          d="M13.5596 16.75C13.4053 16.75 13.251 16.7026 13.1192 16.6074L9.00012 13.6211L4.88101 16.6074C4.61731 16.7993 4.26282 16.7973 3.99922 16.6064C3.73652 16.415 3.62712 16.0766 3.72772 15.768L5.3039 10.9247L1.29321 7.84459C1.03831 7.64879 0.936807 7.31289 1.04031 7.00869C1.14381 6.70449 1.42901 6.49988 1.75031 6.49988H6.77961L8.28552 1.77239C8.38512 1.46139 8.67421 1.24988 9.00031 1.24988C9.32641 1.24988 9.61551 1.46129 9.71511 1.77239L11.221 6.49988H16.2503C16.5716 6.49988 16.8567 6.70449 16.9603 7.00869C17.0639 7.31289 16.9623 7.64879 16.7074 7.84459L12.6967 10.9247L14.2729 15.768C14.3735 16.0766 14.2641 16.415 14.0014 16.6064C13.8696 16.7021 13.7149 16.75 13.5596 16.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Star2;
