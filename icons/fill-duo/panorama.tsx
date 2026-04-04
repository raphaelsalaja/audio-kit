import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Panorama({
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
          d="M2.7451 15.043C2.3857 15.043 2.0303 14.9326 1.7314 14.7193C1.2734 14.3922 1 13.8594 1 13.294V4.70611C1 4.14071 1.2734 3.60801 1.7319 3.28081C2.1889 2.95511 2.7802 2.86971 3.3134 3.05181C5.1464 3.68171 7.0561 4.00101 8.9882 4.00201H9.0024C10.9375 4.00201 12.8496 3.68221 14.6865 3.05181C15.2197 2.86921 15.811 2.95371 16.2685 3.28081C16.7265 3.60791 16.9999 4.14071 16.9999 4.70611V13.294C16.9999 13.8594 16.7265 14.3921 16.2685 14.7188C15.812 15.0445 15.2226 15.1319 14.687 14.9483C12.8452 14.3165 10.9287 13.9903 8.9883 13.9981C7.0562 13.9996 5.1465 14.3194 3.313 14.9483C3.1284 15.0118 2.936 15.043 2.7451 15.043Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Panorama;
