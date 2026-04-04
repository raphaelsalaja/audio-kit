import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BicycleElectric({
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
          d="m3.8218,8.7573l-.1494.2129c-.3984.5669-1.0483.9048-1.7397.9048-.1552,0-.3085-.0244-.4594-.0579-.4447.5232-.7232,1.1924-.7232,1.9329,0,1.6567,1.3431,3,3,3s3-1.3433,3-3c0-1.6323-1.3054-2.9536-2.9283-2.9927Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m1.0314,10.4797c-.1805.3857-.2814.8162-.2814,1.2703,0,1.6569,1.343,3,3,3s3-1.3431,3-3c0-1.3444-.8842-2.4823-2.1029-2.8636"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.4534,7.0865l-.4222-.8023c-.0804-.1527-.197-.2788-.336-.3702"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.6797,4.3364c-.1074-.2065-.3213-.3364-.5547-.3364h-1.3379l.6104-1.5166c.1182-.2949-.0029-.6313-.2822-.7827-.2764-.1519-.627-.0708-.8096.1904L.1133,5.0161c-.1338.1909-.1504.4404-.043.6475.1074.2065.3213.3364.5547.3364h1.3379l-.6104,1.5166c-.1182.2949.0029.6313.2822.7827.0938.0513.1963.0757.2979.0757.1973,0,.3906-.0938.5117-.2661l2.1924-3.125c.1338-.1909.1504-.4404.043-.6475Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.25,14.75c1.6569,0,3-1.3431,3-3s-1.3431-3-3-3-3,1.3432-3,3,1.3431,3,3,3Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m14.25,14.75c1.657,0,3-1.3431,3-3s-1.343-3-3-3-3,1.3431-3,3,1.343,3,3,3Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.25,11.75l-3.4027-8.3764c-.1532-.377-.5195-.6236-.9265-.6236h-1.4209"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.75,11.75c3.5934-1.2441,6.3333-3.1152,8.22-5.6128"
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

export default BicycleElectric;
