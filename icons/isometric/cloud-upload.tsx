import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudUpload({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path d="M9.5 10.1333V18.5" stroke={fill} />
        <path
          d="M6.8269 11.638L9.49992 10L12.4999 14"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9999 2.625L8.10205 3.6666L10.2631 4.24287L12.04 5.2994L14.6333 8.61304L15.4977 12.3829L17.0105 13.2713L18.5472 15.5525L19.5557 18.1217L19.0995 21.1232L21.8574 19.4989L21.9809 17.625V15.5525L20.3312 12.8201L17.9999 11.0072V10.625L17.4999 8.125L14.9999 4.625L12.9999 3.125L10.9999 2.625Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7.19531 4.24103L8.73017 3.49552L9.4976 3.12284C10.5563 2.64504 11.6903 2.41133 13.1297 3.12284C15.8409 4.46303 18.0387 8.00586 18.0387 11.036C20.2981 12.1528 22.1297 15.1052 22.1297 17.6303C22.1297 18.4002 21.9594 19.0415 21.6586 19.5293C21.3491 20.0314 20.8016 20.315 20.2764 20.5834L18.3087 21.589"
          stroke={fill}
        />
        <path d="M15.4419 12.2279L18.0602 10.9187" stroke={fill} />
        <path
          d="M15.4191 21.4966L10.51 19.0699L5.60092 16.6433C3.34157 15.5265 1.51001 12.5741 1.51001 10.049C1.51001 7.52394 3.34157 6.38231 5.60092 7.49913C5.60092 4.46901 7.79879 3.09905 10.51 4.43924C13.2212 5.77943 15.4191 9.32226 15.4191 12.3524C17.6784 13.4692 19.51 16.4216 19.51 18.9467C19.51 21.4718 17.6784 22.6134 15.4191 21.4966Z"
          stroke={fill}
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default CloudUpload;
