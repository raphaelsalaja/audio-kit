import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PeopleRoof({
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
          d="M5.25 12.0005C2.93013 12.0005 1.00005 13.6622 0.583145 15.8608C0.541527 16.0802 0.599906 16.3068 0.74239 16.4789C0.884874 16.6509 1.09663 16.7505 1.32001 16.7505H8.82001H9.17999H16.68C16.9034 16.7505 17.1151 16.6509 17.2576 16.4789C17.4001 16.3068 17.4585 16.0802 17.4169 15.8608C17 13.6622 15.0699 12.0005 12.75 12.0005C11.2253 12.0005 9.86904 12.7183 9.00001 13.8345C8.13098 12.7183 6.77468 12.0005 5.25 12.0005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.25 10.5005C6.49312 10.5005 7.5 9.49363 7.5 8.2505C7.5 7.00738 6.49312 6.0005 5.25 6.0005C4.00688 6.0005 3 7.00738 3 8.2505C3 9.49363 4.00688 10.5005 5.25 10.5005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.75 10.5005C13.9931 10.5005 15 9.49363 15 8.2505C15 7.00738 13.9931 6.0005 12.75 6.0005C11.5069 6.0005 10.5 7.00738 10.5 8.2505C10.5 9.49363 11.5069 10.5005 12.75 10.5005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.67393 0.0750897C8.87993 -0.0243585 9.12005 -0.0243585 9.32605 0.0750897L16.576 3.57509C16.9491 3.75516 17.1055 4.20354 16.9254 4.57656C16.7453 4.94958 16.2969 5.10599 15.9239 4.92591L8.99999 1.58333L2.07605 4.92591C1.70303 5.10599 1.25465 4.94958 1.07458 4.57656C0.894496 4.20354 1.05091 3.75516 1.42393 3.57509L8.67393 0.0750897Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PeopleRoof;
