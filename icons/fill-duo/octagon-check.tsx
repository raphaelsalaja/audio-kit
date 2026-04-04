import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonCheck({
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
          d="M12.9122 2.30573C12.3927 1.78623 11.7022 1.5 10.9679 1.5H7.03329C6.29889 1.5 5.6085 1.78613 5.089 2.30573L2.30679 5.08789C1.78729 5.60739 1.5011 6.29793 1.5011 7.03223V10.9668C1.5011 11.7012 1.78719 12.3916 2.30679 12.9111L5.089 15.6933C5.6085 16.2128 6.29899 16.499 7.03329 16.499H10.9679C11.7023 16.499 12.3927 16.2129 12.9122 15.6933L15.6944 12.9111C16.2139 12.3916 16.5001 11.7011 16.5001 10.9668V7.03223C16.5001 6.29783 16.214 5.60739 15.6944 5.08789L12.9122 2.30573Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.00011 12.5C7.78771 12.5 7.58511 12.4102 7.44251 12.252L5.19251 9.752C4.91561 9.4439 4.9405 8.96977 5.2482 8.69237C5.5568 8.41647 6.02941 8.43999 6.30781 8.74809L7.95621 10.5801L11.6569 5.79149C11.9098 5.46339 12.382 5.40376 12.7087 5.65666C13.0363 5.90956 13.0969 6.38078 12.8435 6.70848L8.59351 12.2085C8.45781 12.3848 8.2507 12.4912 8.0286 12.4995C8.0188 12.5 8.00941 12.5 8.00011 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OctagonCheck;
