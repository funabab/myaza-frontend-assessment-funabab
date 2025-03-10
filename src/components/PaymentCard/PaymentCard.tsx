import { ComponentProps } from "react";

export interface PaymentCardProps extends ComponentProps<"svg"> {
  amount: string;
  cardNumber: string;
  expiryDate: string;
}

const PaymentCard = ({
  amount,
  cardNumber,
  expiryDate,
  className,
  ...props
}: PaymentCardProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 391 198"
      fill="none"
      {...props}
      className={className}
    >
      <rect width={391} height={197.598} y={0.069} fill="url(#a)" rx={20} />
      <mask
        id="b"
        width={391}
        height={198}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha"
        }}
      >
        <rect width={391} height={197.598} y={0.069} fill="#ED713C" rx={20} />
      </mask>
      <g fill="#000" mask="url(#b)">
        <ellipse
          cx={30.412}
          cy={228.811}
          opacity={0.1}
          rx={199.224}
          ry={121.351}
        />
        <ellipse
          cx={360.588}
          cy={-31.074}
          opacity={0.08}
          rx={199.224}
          ry={121.351}
        />
      </g>
      <text
        xmlSpace="preserve"
        fill="#fff"
        fontSize={14}
        fontWeight={500}
        letterSpacing={0.5}
        style={{
          whiteSpace: "pre"
        }}
      >
        <tspan
          x={312.359}
          y={169.514}
          className="font-karla text-sm font-medium"
        >
          {expiryDate}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill="#fff"
        fontSize={14}
        fontWeight={500}
        letterSpacing={0.5}
        opacity={0.9}
        style={{
          whiteSpace: "pre"
        }}
      >
        <tspan
          x={37.237}
          y={169.514}
          className="font-karla text-sm font-medium"
        >
          {cardNumber}
        </tspan>
      </text>
      <path fill="#FF5F00" d="M318.283 30.11h15.103v23.48h-15.103V30.11Z" />
      <path
        fill="#fff"
        d="M308.071 65.406v-2.488c0-.954-.671-1.576-1.822-1.576-.575 0-1.199.165-1.63.705-.336-.457-.815-.705-1.534-.705-.48 0-.959.124-1.343.58v-.498h-1.007v3.982h1.007v-2.198c0-.705.432-1.037 1.103-1.037s1.007.373 1.007 1.037v2.198h1.007v-2.198c0-.705.479-1.037 1.102-1.037.672 0 1.007.373 1.007 1.037v2.198h1.103Zm14.911-3.982h-1.63v-1.203h-1.007v1.203h-.911v.788h.911v1.826c0 .912.432 1.452 1.582 1.452a3.01 3.01 0 0 0 1.247-.29l-.288-.748c-.287.166-.623.208-.863.208-.479 0-.671-.249-.671-.664v-1.784h1.63v-.788Zm8.535-.083c-.576 0-.959.25-1.199.581v-.498h-1.007v3.982h1.007v-2.24c0-.663.335-1.036.959-1.036.191 0 .431.041.623.083l.288-.83c-.192-.041-.48-.041-.671-.041Zm-12.898.415c-.479-.29-1.151-.414-1.87-.414-1.15 0-1.917.497-1.917 1.285 0 .664.575 1.037 1.582 1.162l.479.041c.528.083.815.208.815.415 0 .29-.383.498-1.055.498a2.936 2.936 0 0 1-1.534-.415l-.479.664c.527.332 1.246.498 1.965.498 1.343 0 2.11-.54 2.11-1.286 0-.706-.623-1.079-1.582-1.203l-.48-.042c-.431-.041-.767-.124-.767-.373 0-.29.336-.456.863-.456.576 0 1.151.207 1.439.331l.431-.705Zm26.754-.414c-.576 0-.959.248-1.199.58v-.498h-1.007v3.982h1.007v-2.24c0-.663.336-1.036.959-1.036.192 0 .432.041.623.083l.288-.83c-.192-.041-.479-.041-.671-.041Zm-12.85 2.074c0 1.202.959 2.074 2.446 2.074.671 0 1.15-.125 1.63-.457l-.48-.705a2.13 2.13 0 0 1-1.198.373c-.815 0-1.391-.497-1.391-1.285 0-.747.576-1.245 1.391-1.286.431 0 .815.124 1.198.373l.48-.705c-.48-.332-.959-.456-1.63-.456-1.487 0-2.446.87-2.446 2.074Zm9.302 0v-1.992h-1.007v.498c-.336-.373-.815-.58-1.438-.58-1.295 0-2.302.87-2.302 2.074 0 1.202 1.007 2.074 2.302 2.074.671 0 1.15-.208 1.438-.581v.497h1.007v-1.99Zm-3.692 0c0-.706.527-1.286 1.39-1.286.815 0 1.391.539 1.391 1.285 0 .706-.576 1.286-1.391 1.286-.863-.041-1.39-.58-1.39-1.285Zm-12.034-2.074c-1.343 0-2.302.829-2.302 2.074 0 1.244.959 2.074 2.35 2.074.671 0 1.342-.166 1.87-.54l-.48-.622a2.523 2.523 0 0 1-1.342.415c-.624 0-1.247-.249-1.391-.954h3.404v-.332c.048-1.286-.815-2.115-2.109-2.115Zm0 .746c.623 0 1.055.332 1.15.954h-2.397c.096-.539.528-.954 1.247-.954Zm24.979 1.328v-3.568h-1.006v2.074c-.336-.373-.816-.58-1.439-.58-1.294 0-2.301.87-2.301 2.074 0 1.202 1.007 2.074 2.301 2.074.671 0 1.151-.208 1.439-.581v.497h1.006v-1.99Zm-3.691 0c0-.706.527-1.286 1.39-1.286.815 0 1.39.539 1.39 1.285 0 .706-.575 1.286-1.39 1.286-.863-.041-1.39-.58-1.39-1.285Zm-33.658 0v-1.992h-1.007v.498c-.336-.373-.815-.58-1.439-.58-1.294 0-2.301.87-2.301 2.074 0 1.202 1.007 2.074 2.301 2.074.672 0 1.151-.208 1.439-.581v.497h1.007v-1.99Zm-3.74 0c0-.706.527-1.286 1.39-1.286.815 0 1.391.539 1.391 1.285 0 .706-.576 1.286-1.391 1.286-.863-.041-1.39-.58-1.39-1.285Z"
      />
      <path
        fill="#EB001B"
        d="M319.241 41.85c0-4.77 2.589-9.001 6.569-11.74-2.925-1.99-6.617-3.193-10.644-3.193-9.542 0-17.261 6.678-17.261 14.933 0 8.255 7.719 14.933 17.261 14.933 4.027 0 7.719-1.203 10.644-3.194-3.98-2.696-6.569-6.969-6.569-11.739Z"
      />
      <path
        fill="#F79E1B"
        d="M353.762 41.85c0 8.255-7.719 14.933-17.261 14.933-4.027 0-7.719-1.203-10.644-3.194 4.028-2.737 6.569-6.969 6.569-11.739 0-4.77-2.589-9.001-6.569-11.74 2.925-1.99 6.617-3.193 10.644-3.193 9.542 0 17.261 6.72 17.261 14.933Z"
      />
      <text
        xmlSpace="preserve"
        fill="#fff"
        fontSize={28}
        fontWeight={500}
        letterSpacing={0}
        style={{
          whiteSpace: "pre"
        }}
      >
        <tspan
          x={37.237}
          y={81.722}
          className="font-karla text-[28px] font-medium"
        >
          {amount}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        fill="#fff"
        fontSize={14}
        fontWeight={500}
        letterSpacing={0}
        opacity={0.54}
        style={{
          whiteSpace: "pre"
        }}
      >
        <tspan x={37.237} y={44.942} className="font-karla text-sm font-medium">
          {"Current Balance"}
        </tspan>
      </text>
      <defs>
        <linearGradient
          id="a"
          x1={196.848}
          x2={203.087}
          y1={-32.69}
          y2={222.457}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C2CF3" />
          <stop offset={1} stopColor="#3A6FF9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { PaymentCard };
