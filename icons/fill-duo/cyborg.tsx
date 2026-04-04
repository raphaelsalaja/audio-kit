import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cyborg({
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
          d="M7.3037 1.15084C11.6573 0.241718 15.5 3.54718 15.5 7.75V9.26358L17.1144 11.5699C17.2404 11.7499 17.2811 11.976 17.2259 12.1886C17.1707 12.4012 17.025 12.5789 16.8274 12.6748L15.4201 13.3575L15.2023 14.6293C15.0191 15.7004 14.0962 16.4863 13.0124 16.4998H9.40708L5.80172 16.9982C5.59432 17.0126 5.39027 16.9402 5.23828 16.7983C5.0863 16.6565 5 16.4579 5 16.25V13.3334C2.792 11.8537 1.4952 9.11549 2.18752 6.14098C2.78121 3.58934 4.74433 1.6861 7.3037 1.15084Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.106 15C14.7964 15.8771 13.9667 16.4879 13.0124 16.4998H10.7173C9.21272 16.4829 7.99899 15.2586 7.99899 13.75V9.75C7.99899 9.33579 8.33478 9 8.74899 9C9.16321 9 9.49899 9.33579 9.49899 9.75V13.75C9.49899 14.4408 10.0582 15 10.749 15H15.106Z"
          fill={fill}
        />
        <path
          d="M6.25 7.75C6.25 6.36935 7.36881 5.25 8.75 5.25C10.1312 5.25 11.25 6.36935 11.25 7.75C11.25 9.13065 10.1312 10.25 8.75 10.25C7.36881 10.25 6.25 9.13065 6.25 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Cyborg;
