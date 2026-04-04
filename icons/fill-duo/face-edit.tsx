import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEdit({
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
          d="m9.179,15.991l.7399-2.1453c.1104-.3193.2939-.6143.5332-.8545l3.1641-3.1641c.6123-.6133,1.4287-.9512,2.2979-.9512.3497,0,.686.0688,1.0089.1741.0455-.3445.0771-.6934.0771-1.05C17,3.5889,13.4111,0,9,0S1,3.5889,1,8s3.5889,8,8,8c.0604,0,.1189-.0078.179-.009Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9,12.75c-1.1758,0-2.2539-.5947-2.8838-1.5913-.2217-.3501-.1172-.8135.2334-1.0347.3496-.2212.8135-.1162,1.0342.2329.3535.5591.958.8931,1.6162.8931s1.2627-.334,1.6162-.8931c.2207-.3491.6836-.4541,1.0342-.2329s.4551.6846.2334,1.0347c-.6299.9966-1.708,1.5913-2.8838,1.5913Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6,9c.552,0,1-.4477,1-1s-.448-1-1-1-1,.4477-1,1,.448,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12,9c.552,0,1-.4477,1-1s-.448-1-1-1-1,.4477-1,1,.448,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m17.4873,11.2236l-.3359-.3359c-.6816-.6826-1.793-.6826-2.4746,0l-3.1611,3.1611c-.0801.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1426.1431.335.2197.5303.2197.082,0,.1641-.0132.2441-.041l2.6709-.9209c.1084-.0371.2061-.0981.2861-.1787l3.1611-3.1611c.3311-.3306.5127-.77.5127-1.2373,0-.4678-.1826-.9072-.5127-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default FaceEdit;
